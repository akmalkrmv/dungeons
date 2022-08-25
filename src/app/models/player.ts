import { Card } from './card';

export interface Player {
  name: string;
  
  maxHealth: number;
  health: number;
  maxPower: number;
  power: number;

  dicesCount: number;
  dices: number[];
  effects: string[];
  equipment: Card[];
  backpack: Card[];
  deck: Card[];
}

export interface Enemy {
  name: string;
  maxHealth: number;
  health: number;
  effects: string[];
  dicesCount: number;

  dices: number[];
  deck: Card[];
}

