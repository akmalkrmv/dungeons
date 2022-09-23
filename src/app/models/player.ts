import { ICard } from './card';
import { ICardEffect } from './card-effect';
import { IDice } from './dice';

export interface IPlayer {
  isMainCharacter: boolean;

  name: string;

  maxHealth: number;
  health: number;
  money: number;

  dicesCount: number;
  dices: IDice[];

  effects: ICardEffect[];

  initialCardsCount: number;
  cards: ICard[];
  specialCards: ICard[];
}

export class Player implements IPlayer {
  isMainCharacter: boolean = true;

  health: number = this.maxHealth;
  money: number = 0;

  maxPower: number = 8;
  power: number = this.maxPower;

  initialCardsCount: number = 1;
  equipment: ICard[] = [];
  backpack: ICard[] = [];
  cards: ICard[] = [];
  specialCards: ICard[] = [];

  dices: IDice[] = [];
  effects: ICardEffect[] = [];

  constructor(public name: string, public maxHealth: number, public dicesCount: number) {}
}

export class Enemy implements IPlayer {
  isMainCharacter: boolean = false;

  health: number = this.maxHealth;
  money: number = 0;

  initialCardsCount: number = 1;
  cards: ICard[] = [];
  specialCards: ICard[] = [];

  dices: IDice[] = [];
  effects: ICardEffect[] = [];

  constructor(public name: string, public level: number, public maxHealth: number, public dicesCount: number) {}
}
