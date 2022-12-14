import { DiceService } from 'src/app/services/dice.service';
import { IBattleInfo } from '../battle-info';
import { Dice } from '../dice';
import { ICardAction } from './card-action';

export class BumpDiceAction implements ICardAction {
  description = `Dice value +1`;

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const bumped = dice.value + 1;
    const dices = bumped > 6 ? [new Dice(6), new Dice(bumped % 6)] : [new Dice(bumped)];
    const updated = { ...player, dices: [...player.dices, ...dices] };
    return { ...battle, player: updated };
  }
}
export class ReturnDiceAction implements ICardAction {
  description = `Return the ddice`;

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const updated = { ...player, dices: [...player.dices, dice] };
    return { ...battle, player: updated };
  }
}
export class RerollDiceAction implements ICardAction {
  description = `Get a new dice`;

  private diceService = new DiceService();

  act(battle: IBattleInfo): IBattleInfo {
    const { player } = battle;
    const updated = { ...player, dices: [...player.dices, this.diceService.generateRandomDice()] };
    return { ...battle, player: updated };
  }
}
