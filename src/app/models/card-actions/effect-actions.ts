import { IBattleInfo } from '../battle-info';
import { ICardEffect, BurnEffect, LockEffect, FreezeEffect, PoisonEffect, ShieldEffect } from '../card-effect';
import { IPlayer } from '../player';
import { ICardAction } from './card-action';

const addEffect = (player: IPlayer, effect: ICardEffect): IPlayer => {
  const existing = player.effects.find((item) => item.name === effect.name);
  if (existing) {
    existing.amount += effect.amount;
    player.effects = player.effects.filter((item) => item.name !== effect.name);
  }

  return { ...player, effects: [...player.effects, existing || effect] };
};

export class BurnAction implements ICardAction {
  constructor(private burn: number = 1) {}

  act(battle: IBattleInfo): IBattleInfo {
    return { ...battle, enemy: addEffect(battle.enemy, new BurnEffect(this.burn)) };
  }
}
export class LockAction implements ICardAction {
  constructor(private lock: number = 1) {}

  act(battle: IBattleInfo): IBattleInfo {
    return { ...battle, enemy: addEffect(battle.enemy, new LockEffect(this.lock)) };
  }
}
export class FreezeAction implements ICardAction {
  constructor(private freeze: number = 1) {}

  act(battle: IBattleInfo): IBattleInfo {
    return { ...battle, enemy: addEffect(battle.enemy, new FreezeEffect(this.freeze)) };
  }
}
export class PoisonAction implements ICardAction {
  constructor(private poison: number = 1) {}

  act(battle: IBattleInfo): IBattleInfo {
    return { ...battle, enemy: addEffect(battle.enemy, new PoisonEffect(this.poison)) };
  }
}

export class ShieldAction implements ICardAction {
  constructor(private shield: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const amount = this.shield || battle.dice.value;
    return { ...battle, player: addEffect(battle.player, new ShieldEffect(amount)) };
  }
}
