import { Dice } from './dice';
import { IPlayer } from './player';

export interface IBattleInfo {
  player: IPlayer;
  enemy: IPlayer;
  dice: Dice;
}
