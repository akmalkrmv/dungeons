import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CARDS } from '../data/cards.data';
import { Card } from '../models/card';
import { IPlayer } from '../models/player';

@Injectable({ providedIn: 'root' })
export class CardService {
  cards$ = new BehaviorSubject<Card[]>(this.generateCards());
  specialCards$ = new BehaviorSubject<Card[]>(this.generateSpecialCards());

  generateCards(player?: IPlayer): Card[] {
    if (player && !player.isMainCharacter) {
      return [...CARDS.SORCERESS];
    }

    return [...CARDS.HEAL_AND_ATTACK];
  }

  generateSpecialCards(player?: IPlayer): Card[] {
    if (player && !player.isMainCharacter) {
      return [];
    }

    return [...CARDS.SPECIALS];
  }
}
