import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player, Enemy } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  player$ = new BehaviorSubject<Player>({
    name: 'Jester',
    maxHealth: 32,
    health: 32,
    maxPower: 20,
    power: 20,
    dicesCount: 4,
    dices: [],
    effects: [],
    equipment: [],
    backpack: [],
    cards: [],
    specialCards: [],
  });

  enemy$ = new BehaviorSubject<Enemy>({
    name: 'Dire Wolf',
    maxHealth: 42,
    health: 42,
    dicesCount: 4,
    dices: [],
    effects: [],
    cards: [],
    specialCards: [],
  });
}
