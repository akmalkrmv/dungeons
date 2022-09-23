import { IBattleInfo } from '../battle-info';

export interface ICardAction {
  description: string;
  act(properties: IBattleInfo): IBattleInfo;
}
