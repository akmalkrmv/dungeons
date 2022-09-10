import { DiceService } from '../services/dice.service';
import { BurnEffect, FreezeEffect, LockEffect } from './card-effect';
import { Dice } from './dice';
import { IPlayer } from './player';

export interface ICardAction {
  act(player: IPlayer, dice: Dice): IPlayer;
}

export class DamageAction implements ICardAction {
  constructor(private damage: number = 0) {}

  act(player: IPlayer, dice: Dice): IPlayer {
    const amount = this.damage ?? dice.value;
    return { ...player, health: player.health - amount };
  }
}
export class HealAction implements ICardAction {
  constructor(private heal: number = 0) {}

  act(player: IPlayer, dice: Dice): IPlayer {
    const amount = this.heal ?? dice.value;
    return { ...player, health: player.health + amount };
  }
}

// Effect actions
export class BurnAction implements ICardAction {
  constructor(private burn: number = 0) {}

  act(player: IPlayer, dice: Dice): IPlayer {
    return { ...player, effects: [...player.effects, new BurnEffect(this.burn)] };
  }
}
export class LockAction implements ICardAction {
  constructor(private lock: number = 0) {}

  act(player: IPlayer, dice: Dice): IPlayer {
    return { ...player, effects: [...player.effects, new LockEffect(this.lock)] };
  }
}
export class FreezeAction implements ICardAction {
  constructor(private freeze: number = 0) {}

  act(player: IPlayer, dice: Dice): IPlayer {
    return { ...player, effects: [...player.effects, new FreezeEffect(this.freeze)] };
  }
}

// Dice actions
export class ReturnDiceAction implements ICardAction {
  act(player: IPlayer, dice: Dice): IPlayer {
    return { ...player, dices: [...player.dices, dice] };
  }
}
export class RerollDiceAction implements ICardAction {
  diceService = new DiceService();
  act(player: IPlayer, dice: Dice): IPlayer {
    return { ...player, dices: [...player.dices, this.diceService.generateRandomDice()] };
  }
}

// name: 'CAULDRON',
// description: `Do 1 damage, get a new dice`,
const cauldronActions = [new ReturnDiceAction(), new DamageAction()];

// name: 'ICE SHARD',
// description: `Do ${N_DAMAGE}, Freeze 1 dice`,
const iceShardActions = [new DamageAction(), new FreezeAction(1)];
