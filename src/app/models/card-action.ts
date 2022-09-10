import { DiceService } from '../services/dice.service';
import { BurnEffect, FreezeEffect, LockEffect, PoisonEffect, ShieldEffect } from './card-effect';
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
    const amount = this.damage ?? dice.value;
    return { ...battle, enemy: { ...enemy, health: enemy.health - amount } };
  }
}
export class HealAction implements ICardAction {
  constructor(private heal: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const amount = this.heal ?? dice.value;
    return { ...battle, player: { ...player, health: player.health + amount } };
  }
}
export class ShieldAction implements ICardAction {
  constructor(private shield: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const amount = this.shield ?? dice.value;
    return { ...battle, player: { ...player, effects: [...player.effects, new ShieldEffect(amount)] } };
  }
}

// Effect actions
export class BurnAction implements ICardAction {
  constructor(private burn: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { enemy } = battle;
    return { ...battle, enemy: { ...enemy, effects: [...enemy.effects, new BurnEffect(this.burn)] } };
  }
}
export class LockAction implements ICardAction {
  constructor(private lock: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { enemy } = battle;
    return { ...battle, enemy: { ...enemy, effects: [...enemy.effects, new LockEffect(this.lock)] } };
  }
}
export class FreezeAction implements ICardAction {
  constructor(private freeze: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { enemy } = battle;
    return { ...battle, enemy: { ...enemy, effects: [...enemy.effects, new FreezeEffect(this.freeze)] } };
  }
}
export class PoisonAction implements ICardAction {
  constructor(private poison: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { enemy } = battle;
    return { ...battle, enemy: { ...enemy, effects: [...enemy.effects, new PoisonEffect(this.poison)] } };
  }
}

// Dice actions
export class BumpDiceAction implements ICardAction {
  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const bumped = dice.value + 1;
    const dices = bumped > 6 ? [{ value: 6 }, { value: bumped % 6 }] : [{ value: bumped }];
    return { ...battle, player: { ...player, dices: [...player.dices, ...dices] } };
  }
}
export class ReturnDiceAction implements ICardAction {
  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    return { ...battle, player: { ...player, dices: [...player.dices, dice] } };
  }
}
export class RerollDiceAction implements ICardAction {
  diceService = new DiceService();
  act(battle: IBattleInfo): IBattleInfo {
    const { player } = battle;
    return { ...battle, player: { ...player, dices: [...player.dices, this.diceService.generateRandomDice()] } };
  }
}

// name: 'CAULDRON',
// description: `Do 1 damage, get a new dice`,
const cauldronActions = [new ReturnDiceAction(), new DamageAction()];

// name: 'ICE SHARD',
// description: `Do ${N_DAMAGE}, Freeze 1 dice`,
const iceShardActions = [new DamageAction(), new FreezeAction(1)];
