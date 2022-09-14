import { IBattleInfo } from '../battle-info';

export interface ICardAction {
  act(properties: IBattleInfo): IBattleInfo;
}
