import { Card } from './card';
import { Dice } from './dice';

export interface IPlayer {
  isMainCharacter: boolean;

  name: string;

  maxHealth: number;
  health: number;

  dicesCount: number;
  dices: Dice[];

  effects: string[];

  cards: Card[];
  specialCards: Card[];
}

export class Player implements IPlayer {
  isMainCharacter: boolean = true;

  health: number = this.maxHealth;

  maxPower: number = 8;
  power: number = this.maxPower;

  equipment: Card[] = [];
  backpack: Card[] = [];
  cards: Card[] = [];
  specialCards: Card[] = [];

  dices: Dice[] = [];
  effects: string[] = [];

  constructor(public name: string, public maxHealth: number, public dicesCount: number) {}
}

export class Enemy implements IPlayer {
  isMainCharacter: boolean = false;

  health: number = this.maxHealth;

  cards: Card[] = [];
  specialCards: Card[] = [];

  dices: Dice[] = [];
  effects: string[] = [];

  constructor(public name: string, public maxHealth: number, public dicesCount: number) {}
}
