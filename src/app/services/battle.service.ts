import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardType } from '../models/card';
import { Dice } from '../models/dice';
import { Enemy, Player } from '../models/player';
import { CardService } from './card.service';
import { PlayerService } from './player.service';

type PlayerOrEnemySubject = BehaviorSubject<Player> | BehaviorSubject<Enemy>;

@Injectable({ providedIn: 'root' })
export class BattleService {
  player$ = this.playerService.player$;
  enemy$ = this.playerService.enemy$;

  cards$ = this.cardService.cards$;
  specialCards$ = this.cardService.specialCards$;

  dices$ = new BehaviorSubject<Dice[]>([]);
  isPlayersTurn$ = new BehaviorSubject<boolean>(true);

  constructor(private playerService: PlayerService, private cardService: CardService) {}

  endTurn() {
    this.isPlayersTurn$.next(!this.isPlayersTurn$.value);
    this.dices$.next(this.generateDices());
    this.cards$.next(this.cardService.generateCards());
    this.specialCards$.next(this.cardService.generateSpecialCards());
  }

  generateDices(): Dice[] {
    const count = this.player$.value.dicesCount;
    const dices = [];

    for (let i = 0; i < count; i++) {
      dices.push(this.generateRandomDice());
    }

    return dices;
  }

  generateRandomDice(): Dice {
    return { value: Math.ceil(Math.random() * 6) };
  }

  applyCard(card: Card) {
    const dice = card.dice;
    const diceValue = card.dice?.value ?? 0;
    const isPlayersTurn = this.isPlayersTurn$.value;

    const mover$ = isPlayersTurn ? this.player$ : this.enemy$;
    const taker$ = isPlayersTurn ? this.enemy$ : this.player$;

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
          this.rerollDice();
          break;
        case CardType.ReturnDice:
          this.returnDice(dice);
          break;
        // ....
      }
    };

    if (Array.isArray(card.cardType)) {
      card.cardType.forEach(handleCard);
    } else {
      handleCard(card.cardType);
    }
  }

  attack<T extends PlayerOrEnemySubject>(target$: T, damageValue: number): void {
    const target = target$.value;

    if (damageValue) {
      target.health = Math.max(0, target.health - damageValue);
      target$.next(target as any);
    }
  }

  heal<T extends PlayerOrEnemySubject>(target$: T, healValue: number): void {
    const target = target$.value;

    if (healValue) {
      target.health = Math.min(target.maxHealth, target.health + healValue);
      target$.next(target as any);
    }
  }

  rerollDice(): void {
    this.dices$.next([...this.dices$.value, this.generateRandomDice()]);
  }

  returnDice(dice?: Dice): void {
    if (dice) {
      this.dices$.next([...this.dices$.value, dice]);
    }
  }
}
