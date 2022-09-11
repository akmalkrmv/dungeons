import { DiceService } from '../services/dice.service';
import { BurnEffect, FreezeEffect, ICardEffect, LockEffect, PoisonEffect, ShieldEffect } from './card-effect';
import { Dice } from './dice';
import { IPlayer } from './player';

export interface IBattleInfo {
  player: IPlayer;
  enemy: IPlayer;
  dice: Dice;
}

export interface ICardAction {
  act(properties: IBattleInfo): IBattleInfo;
}

export class DamageAction implements ICardAction {
  constructor(private damage: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { enemy, dice } = battle;
    const amount = this.damage || dice.value;
    const updated = { ...enemy, health: Math.max(0, enemy.health - amount) };
    return { ...battle, enemy: updated };
  }
}
export class HealAction implements ICardAction {
  constructor(private heal: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const amount = this.heal || dice.value;
    const updated = { ...player, health: Math.min(player.maxHealth, player.health + amount) };
    return { ...battle, player: updated };
  }
}

// Effect actions

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

// Dice actions
export class BumpDiceAction implements ICardAction {
  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const bumped = dice.value + 1;
    const dices = bumped > 6 ? [{ value: 6 }, { value: bumped % 6 }] : [{ value: bumped }];
    const updated = { ...player, dices: [...player.dices, ...dices] };
    return { ...battle, player: updated };
  }
}
export class ReturnDiceAction implements ICardAction {
  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const updated = { ...player, dices: [...player.dices, dice] };
    return { ...battle, player: updated };
  }
}
export class RerollDiceAction implements ICardAction {
  diceService = new DiceService();
  act(battle: IBattleInfo): IBattleInfo {
    const { player } = battle;
    const updated = { ...player, dices: [...player.dices, this.diceService.generateRandomDice()] };
    return { ...battle, player: updated };
  }
}

// name: 'CAULDRON',
// description: `Do 1 damage, get a new dice`,
const cauldronActions = [new ReturnDiceAction(), new DamageAction()];

// name: 'ICE SHARD',
// description: `Do ${N_DAMAGE}, Freeze 1 dice`,
const iceShardActions = [new DamageAction(), new FreezeAction(1)];
