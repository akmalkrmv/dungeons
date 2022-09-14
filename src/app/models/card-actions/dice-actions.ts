import { DiceService } from 'src/app/services/dice.service';
import { IBattleInfo } from '../battle-info';
import { ICardAction } from './card-action';

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
  private diceService = new DiceService();
  
  act(battle: IBattleInfo): IBattleInfo {
    const { player } = battle;
    const updated = { ...player, dices: [...player.dices, this.diceService.generateRandomDice()] };
    return { ...battle, player: updated };
  }
}
