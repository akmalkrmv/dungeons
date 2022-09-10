import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ENEMIES, PLAYERS } from '../data';
import { IPlayer } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  player$ = new BehaviorSubject<IPlayer>(PLAYERS.WARRIOR);
  enemy$ = new BehaviorSubject<IPlayer>(ENEMIES.DIRE_WOLF);
}
