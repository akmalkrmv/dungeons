import { Card } from './card';
import { Dice } from './dice';

export interface Player {
  isMainCharacter: boolean;

  name: string;
  maxPower: number;
  power: number;
  maxHealth: number;
  health: number;

  dicesCount: number;
  dices: Dice[];
  effects: string[];
  equipment: Card[];
  backpack: Card[];
  cards: Card[];
  specialCards: Card[];
}
