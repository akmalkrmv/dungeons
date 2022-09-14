import { ICardAction } from './card-actions/card-action';
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

export enum CardPredicate {
  None,
  Even,
  Odd,
  Static,
  Collecting,
}

export interface ICard {
  name: string;
  description: string;
  size: CardSize;
  cardType: CardType | CardType[];
  dice?: Dice;
  uses?: number;
  predicate?: CardPredicate;
  actions: ICardAction[];
}

export class Card implements ICard {
  dice?: Dice;
  uses?: number;
  predicate?: CardPredicate = CardPredicate.None;

  constructor(
    public name: string,
    public description: string,
    public cardType: CardType | CardType[] = [],
    public actions: ICardAction[] = [],
    public size: CardSize = CardSize.Medium
  ) {}

  assign(properties: Partial<Card>): Card {
    return Object.assign(this, properties);
  }
}
