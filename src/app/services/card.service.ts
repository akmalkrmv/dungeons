import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CARDS } from '../data/cards.data';
import { ICard } from '../models/card';
import { IPlayer } from '../models/player';

@Injectable({ providedIn: 'root' })
export class CardService {
  cards$ = new BehaviorSubject<ICard[]>(this.generateCards());
  specialCards$ = new BehaviorSubject<ICard[]>(this.generateSpecialCards());

  generateCards(player?: IPlayer): ICard[] {
    if (player && !player.isMainCharacter) {
      return [...CARDS.SORCERESS];
    }

    // return [...CARDS.HEAL_AND_ATTACK];
    // return [...CARDS.DIFFERENT_TYPES];
    return [...CARDS.EFFECTS];
  }

  generateSpecialCards(player?: IPlayer): ICard[] {
    if (player && !player.isMainCharacter) {
      return [];
    }

    return [...CARDS.SPECIALS];
  }
}
