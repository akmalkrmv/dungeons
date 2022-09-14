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
      return this.autoOrderCards([...CARDS.SORCERESS]);
    }

    // return this.autoOrderCards([...CARDS.HEAL_AND_ATTACK]);
    // return this.autoOrderCards([...CARDS.DIFFERENT_TYPES]);
    return this.autoOrderCards([...CARDS.EFFECTS]);
  }

  generateSpecialCards(player?: IPlayer): ICard[] {
    if (player && !player.isMainCharacter) {
      return [];
    }

    return [...CARDS.SPECIALS];
  }

  autoOrderCards(cards: ICard[]): ICard[] {
    return cards.map((card, index) => ({ ...card, order: index }));
  }
}
