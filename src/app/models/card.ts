import { Dice } from './dice';

export enum CardSize {
  Small = 'small',
  Medium = 'medium',
  Big = 'big',
}

export enum CardType {
  Heal = 'heal',
  Shield = 'shield',
  Attack = 'attack',
  Ice = 'ice',
  Fire = 'fire',
  Poison = 'poison',
  Neutral = 'neutral',
  RerollDice = 'rerolldice',
  ReturnDice = 'returndice',
}

export interface Card {
  name: string;
  description: string;
  size: CardSize;
  cardType: CardType | CardType[];
  dice?: Dice;
  uses?: number;
}
