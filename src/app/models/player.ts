import { ICard } from './card';
import { ICardEffect } from './card-effect';
import { Dice } from './dice';

export interface IPlayer {
  isMainCharacter: boolean;

  name: string;

  maxHealth: number;
  health: number;

  dicesCount: number;
  dices: Dice[];

  effects: ICardEffect[];

  cards: ICard[];
  specialCards: ICard[];
}

export class Player implements IPlayer {
  isMainCharacter: boolean = true;

  health: number = this.maxHealth;

  maxPower: number = 8;
  power: number = this.maxPower;

  equipment: ICard[] = [];
  backpack: ICard[] = [];
  cards: ICard[] = [];
  specialCards: ICard[] = [];

  dices: Dice[] = [];
  effects: string[] = [];

  constructor(public name: string, public maxHealth: number, public dicesCount: number) {}
}

export class Enemy implements IPlayer {
  isMainCharacter: boolean = false;

  health: number = this.maxHealth;

  cards: ICard[] = [];
  specialCards: ICard[] = [];

  dices: Dice[] = [];
  effects: string[] = [];

  constructor(public name: string, public maxHealth: number, public dicesCount: number) {}
}
