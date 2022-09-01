import { Card } from './card';

export interface IDamagable {
  maxHealth: number;
  health: number;
}

export interface Player extends IDamagable {
  name: string;
  maxPower: number;
  power: number;

  dicesCount: number;
  dices: number[];
  effects: string[];
  equipment: Card[];
  backpack: Card[];
  deck: Card[];
}

export interface Enemy extends IDamagable {
  name: string;
  effects: string[];
  dicesCount: number;

  dices: number[];
  deck: Card[];
}
