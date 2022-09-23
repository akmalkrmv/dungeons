import { IBattleInfo } from '../battle-info';
import { ICardAction } from './card-action';

const DICE = `<i class="material-icons">border_style</i>`;

export class HealAction implements ICardAction {
  description = `Heals ${this.heal || DICE}`;

  constructor(private heal: number = 0) {}

  act(battle: IBattleInfo): IBattleInfo {
    const { player, dice } = battle;
    const amount = this.heal || dice.value;
    const updated = { ...player, health: Math.min(player.maxHealth, player.health + amount) };
    return { ...battle, player: updated };
  }
}
