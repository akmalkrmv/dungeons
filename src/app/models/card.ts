import { ICardAction } from './card-actions/card-action';
import { IDice } from './dice';

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
}

export enum CardPredicate {
  None,
  Even,
  Odd,
  Static,
  Collecting,
}

export interface ICard {
  order: number;
  name: string;
  description: string;
  size: CardSize;
  cardType: CardType | CardType[];
  dice?: IDice;
  uses?: number;
  predicate?: CardPredicate;
  actions: ICardAction[];
}

export class Card implements ICard {
  order: number = 0;
  dice?: IDice;
  uses?: number;
  predicate?: CardPredicate = CardPredicate.None;
  description!: string;
  size: CardSize = CardSize.Medium;

  constructor(public name: string, public cardType: CardType | CardType[] = [], public actions: ICardAction[] = []) {
    const [firstAction, secondAction] = actions;
    this.description = [firstAction?.description, secondAction?.description]
      .filter((description) => !!description)
      .join(',<br>');
  }

  assign(properties: Partial<Card>): Card {
    return Object.assign(this, properties);
  }
}

export class SmallCard extends Card {
  override size: CardSize = CardSize.Small;
}
export class BigCard extends Card {
  override size: CardSize = CardSize.Big;
}
