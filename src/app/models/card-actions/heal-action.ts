import { IBattleInfo } from '../battle-info';
import { ICardAction } from './card-action';


export class HealAction implements ICardAction {
  constructor(private heal: number = 0) { }

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const amount = this.heal || dice.value;
    const updated = { ...player, health: Math.min(player.maxHealth, player.health + amount) };
    return { ...battle, player: updated };
  }
}
