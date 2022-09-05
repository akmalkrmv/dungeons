import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CARDS } from '../data/cards.data';
import { Card } from '../models/card';

@Injectable({ providedIn: 'root' })
export class CardService {
  cards$ = new BehaviorSubject<Card[]>(this.generateCards());
  specialCards$ = new BehaviorSubject<Card[]>(this.generateSpecialCards());

  generateCards(): Card[] {
    return [...CARDS.HEAL_AND_ATTACK];
  }

  generateSpecialCards(): Card[] {
    return [...CARDS.SPECIALS];
  }
}
