import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ENEMIES, PLAYERS } from '../data';
import { shuffle } from '../helpers';
import { IPlayer } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  characters$ = new BehaviorSubject<IPlayer[]>([...Object.values(PLAYERS)]);
  player$ = new BehaviorSubject<IPlayer>({ ...PLAYERS.WARRIOR });
  enemy$ = new BehaviorSubject<IPlayer>({ ...ENEMIES.DIRE_WOLF });

  getEnemiesByLevel(level: number, count: number = 4): IPlayer[] {
    const filtered = Object.values(ENEMIES).filter((enemy) => enemy.level === level);
    const enemies = shuffle(filtered).slice(0, count);
    return shuffle(enemies);
  }
}
