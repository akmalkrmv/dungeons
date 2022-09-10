import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Card, CardType } from '../models/card';
import { Dice } from '../models/dice';
import { IPlayer } from '../models/player';
import { CardService } from './card.service';
import { DiceService } from './dice.service';
import { PlayerService } from './player.service';

type PlayerSubject = BehaviorSubject<IPlayer>;

@Injectable({ providedIn: 'root' })
export class BattleService {
  player$ = this.playerService.player$;
  enemy$ = this.playerService.enemy$;

  cards$ = this.cardService.cards$;
  specialCards$ = this.cardService.specialCards$;

  isPlayersTurn$ = new BehaviorSubject<boolean>(true);

  mover$ = this.isPlayersTurn$.pipe(switchMap((isPlayersTurn) => (isPlayersTurn ? this.player$ : this.enemy$)));
  taker$ = this.isPlayersTurn$.pipe(switchMap((isPlayersTurn) => (isPlayersTurn ? this.enemy$ : this.player$)));

  constructor(
    private playerService: PlayerService,
    private cardService: CardService,
    private diceService: DiceService,
    private router: Router
  ) {}

  getMover = () => (this.isPlayersTurn$.value ? this.player$ : this.enemy$);
  getTaker = () => (this.isPlayersTurn$.value ? this.enemy$ : this.player$);

  startBattle() {
    this.isPlayersTurn$.next(true);
    this.resupply(this.player$);
    this.resupply(this.enemy$);
  }

  endBattle(victory: boolean) {
    this.router.navigateByUrl(victory ? '/battle/victory' : '/battle/loss');
  }

  endTurn() {
    this.isPlayersTurn$.next(!this.isPlayersTurn$.value);
    this.resupply(this.player$);
    this.resupply(this.enemy$);
  }

  resupply<T extends PlayerSubject>(target$: T): void {
    const target = target$.value;

    target$.next({
      ...target,
      dices: this.diceService.generateDices(target.dicesCount),
      cards: this.cardService.generateCards(target),
      specialCards: this.cardService.generateSpecialCards(target),
    });
  }

  applyCard(card: Card) {
    const dice = card.dice;
    const diceValue = card.dice?.value ?? 0;
    const mover$ = this.getMover();
    const taker$ = this.getTaker();

    const handleCard = (cardType: CardType) => {
      switch (cardType) {
        case CardType.Neutral:
          break;
        case CardType.Attack:
          this.attack(taker$, diceValue);
          break;
        case CardType.Heal:
          this.heal(mover$, diceValue);
          break;
        case CardType.RerollDice:
          this.rerollDice(mover$);
          break;
        case CardType.ReturnDice:
          this.returnDice(mover$, dice);
          break;
        // ....
      }
    };

    if (Array.isArray(card.cardType)) {
      card.cardType.forEach(handleCard);
    } else {
      handleCard(card.cardType);
    }

    if (this.player$.value.health <= 0) this.endBattle(false);
    if (this.enemy$.value.health <= 0) this.endBattle(true);
  }

  attack<T extends PlayerSubject>(target$: T, damageValue: number): void {
    if (damageValue === undefined) return;
    const health = Math.max(0, target$.value.health - damageValue);
    target$.next({ ...target$.value, health });
  }

  heal<T extends PlayerSubject>(target$: T, healValue: number): void {
    if (healValue === undefined) return;
    const health = Math.min(target$.value.maxHealth, target$.value.health + healValue);
    target$.next({ ...target$.value, health });
  }

  rerollDice<T extends PlayerSubject>(target$: T): void {
    target$.next({ ...target$.value, dices: [...target$.value.dices, this.diceService.generateRandomDice()] });
  }

  returnDice<T extends PlayerSubject>(target$: T, dice?: Dice): void {
    if (dice === undefined) return;
    target$.next({ ...target$.value, dices: [...target$.value.dices, dice] });
  }
}
