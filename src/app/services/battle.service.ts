import { Injectable } from '@angular/core';
import { Enemy, Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  player: Player = {
    name: 'Jester',
    maxHealth: 32,
    health: 27,
    maxPower: 20,
    power: 20,
    dicesCount: 4,
    dices: [],
    effects: [],
    equipment: [],
    backpack: [],
    deck: []
  };

  enemy: Enemy = {
    name: 'Dire Wolf',
    maxHealth: 42,
    health: 42,
    dicesCount: 4,
    dices: [],
    effects: [],
    deck: []
  };

  constructor() {}
}
