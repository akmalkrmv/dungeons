import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { ICard } from '../models/card';
import { IPlayer } from '../models/player';
import { CardService } from './card.service';
import { DiceService } from './dice.service';
import { PlayerService } from './player.service';

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

  doCheckIsBattleOver() {
    if (this.player$.value.health <= 0) this.endBattle(false);
    if (this.enemy$.value.health <= 0) this.endBattle(true);
  }

  endBattle(victory: boolean) {
    this.router.navigateByUrl(victory ? '/battle/victory' : '/battle/loss');
  }

  endTurn() {
    this.applyEffects();
    this.isPlayersTurn$.next(!this.isPlayersTurn$.value);
    this.resupply(this.player$);
    this.resupply(this.enemy$);
  }

  resupply<T extends BehaviorSubject<IPlayer>>(target$: T): void {
    const target = target$.value;

    target$.next({
      ...target,
      dices: this.diceService.generateDices(target.dicesCount),
      cards: this.cardService.generateCards(target),
      specialCards: this.cardService.generateSpecialCards(target),
    });
  }

  applyCard(card: ICard) {
    const mover$ = this.getMover();
    const taker$ = this.getTaker();

    card.actions.forEach((action) => {
      const battle = { player: mover$.value, enemy: taker$.value, dice: card.dice! };
      const { player, enemy } = action.act(battle);
      mover$.next(player);
      taker$.next(enemy);

      this.doCheckIsBattleOver();
    });
  }

  applyEffects() {
    const mover$ = this.getMover();
    const taker$ = this.getTaker();

    taker$.value.effects.forEach((effect) => {
      const { player, enemy } = effect.apply({ player: mover$.value, enemy: taker$.value, dice: null! });
      mover$.next(player);
      taker$.next(enemy);
      this.doCheckIsBattleOver();
    });
  }
}
