import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PLAYER_CARDS } from '../data/player-cards.data';
import { ICard } from '../models/card';
import { IPlayer } from '../models/player';

@Injectable({ providedIn: 'root' })
export class CardService {
  cards$ = new BehaviorSubject<ICard[]>(this.generateCards());
  specialCards$ = new BehaviorSubject<ICard[]>(this.generateSpecialCards());

  generateCards(player?: IPlayer): ICard[] {
    if (player && !player.isMainCharacter) {
      return this.autoOrderCards([...PLAYER_CARDS.SORCERESS]);
    }

    // return this.autoOrderCards([...PLAYER_CARDS.HEAL_AND_ATTACK]);
    // return this.autoOrderCards([...PLAYER_CARDS.DIFFERENT_TYPES]);
    return this.autoOrderCards([...PLAYER_CARDS.EFFECTS]);
  }

  generateSpecialCards(player?: IPlayer): ICard[] {
    if (player && !player.isMainCharacter) {
      return [];
    }

    return [...PLAYER_CARDS.SPECIALS];
  }

  autoOrderCards(cards: ICard[]): ICard[] {
    return cards.map((card, index) => ({ ...card, order: index }));
  }
}
