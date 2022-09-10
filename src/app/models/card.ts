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

export interface Card {
  name: string;
  description: string;
  size: CardSize;
  cardType: CardType | CardType[];
  dice?: Dice;
  uses?: number;
  predicate?: CardPredicate;
  action?: CardAction;
}

export class CardAction {
  constructor(public parent?: CardAction) {}

  act() {}
}

export class DamageAction extends CardAction {
  constructor(parent?: CardAction, public damage?: number) {
    super(parent);
  }

  override act(): CardAction {
    return this;
  }
}

export class FreezeAction extends CardAction {
  constructor(parent?: CardAction, public freeze?: number) {
    super(parent);
  }

  override act(): CardAction {
    return this;
  }
}
export class ReturnDiceAction extends CardAction {
  constructor(parent?: CardAction) {
    super(parent);
  }

  override act(): CardAction {
    return this;
  }
}

// name: 'CAULDRON',
// description: `Do 1 damage, get a new dice`,
new ReturnDiceAction(new DamageAction());

// name: 'ICE SHARD',
// description: `Do ${N_DAMAGE}, Freeze 1 dice`,
new FreezeAction(new DamageAction(), 1);
