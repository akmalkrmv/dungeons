import { Card } from './card';
import { Dice } from './dice';

export interface IDamagable {
  maxHealth: number;
  health: number;
}

export interface Player extends IDamagable {
  name: string;
  maxPower: number;
  power: number;

  dicesCount: number;
  dices: Dice[];
  effects: string[];
  equipment: Card[];
  backpack: Card[];
  cards: Card[];
  specialCards: Card[];
}

export interface Enemy extends IDamagable {
  name: string;
  effects: string[];
  dicesCount: number;

  dices: Dice[];
  cards: Card[];
  specialCards: Card[];
}
