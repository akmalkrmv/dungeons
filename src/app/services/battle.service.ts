import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card';
import { Dice } from '../models/dice';
import { IDamagable } from '../models/player';
import { CardService } from './card.service';
import { PlayerService } from './player.service';

@Injectable({ providedIn: 'root' })
export class BattleService {
  player$ = this.playerService.player$;
  enemy$ = this.playerService.enemy$;

  cards$ = this.cardService.cards$;
  specialCards$ = this.cardService.specialCards$;

  dices$ = new BehaviorSubject<Dice[]>([]);

  currentAttacker$ = new BehaviorSubject<IDamagable>(this.player$.value);
  currentDefender$ = new BehaviorSubject<IDamagable>(this.enemy$.value);

  constructor(
    private playerService: PlayerService,
    private cardService: CardService
  ) {}

  endTurn() {
    [this.currentDefender$, this.currentAttacker$] = [
      this.currentAttacker$,
      this.currentDefender$,
    ];
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
    const target = this.currentDefender$.value;
    if (card.dice) {
      target.health = target.health - card.dice.value;
      this.currentDefender$.next(target);
    }
  }
}
