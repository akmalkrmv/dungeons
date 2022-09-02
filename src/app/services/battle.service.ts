import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card';
import { Dice } from '../models/dice';
import { Enemy, Player } from '../models/player';
import { CardService } from './card.service';
import { PlayerService } from './player.service';

@Injectable({ providedIn: 'root' })
export class BattleService {
  player$ = this.playerService.player$;
  enemy$ = this.playerService.enemy$;

  cards$ = this.cardService.cards$;
  specialCards$ = this.cardService.specialCards$;

  dices$ = new BehaviorSubject<Dice[]>([]);
  isPlayersTurn$ = new BehaviorSubject<boolean>(true);

  constructor(
    private playerService: PlayerService,
    private cardService: CardService
  ) {}

  endTurn() {
    this.isPlayersTurn$.next(!this.isPlayersTurn$.value);
  }

  generateDices() {
    const count = this.player$.value.dicesCount;
    const dices = [];

    for (let i = 0; i < count; i++) {
      dices.push({ value: Math.ceil(Math.random() * 6) });
    }

    return dices;
  }

  applyCard(card: Card) {
    const damage = card.dice?.value ?? 0;
    const target$ = this.isPlayersTurn$.value ? this.enemy$ : this.player$;
    const damaged = this.takeDamage(target$.value, damage);
    target$.next(damaged as any);
  }

  takeDamage<T extends Player | Enemy>(target: T, damage: number): T {
    if (damage) {
      target.health = target.health - damage;
    }

    return target;
  }
}
