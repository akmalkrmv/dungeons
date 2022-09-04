import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardSize, CardType } from '../models/card';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;
const COMBINED_TEST_CARDS = [
  {
    name: 'HEAL',
    description: `Heals ${N_DAMAGE}`,
    size: CardSize.Medium,
    cardType: CardType.Heal,
  },
  {
    name: 'ATTACK',
    description: `Do ⚔2x${N_DAMAGE} damage`,
    size: CardSize.Medium,
    cardType: CardType.Attack,
  },
  // ???
  {
    name: 'ATTACK AND HEAL',
    description: 'Attacks then heals',
    size: CardSize.Medium,
    cardType: [CardType.Attack, CardType.Heal], // ???
  },
];
const DIFFERENT_TYPE_CARDS = [
  {
    name: 'BUMP',
    description: 'Dice value +1',
    size: CardSize.Medium,
    cardType: CardType.Heal,
  },
  {
    name: 'BATTLE AXE',
    description: `Do ⚔2x${N_DAMAGE} damage`,
    size: CardSize.Medium,
    cardType: CardType.Attack,
  },
  {
    name: 'BUCKLER',
    description: 'Add 🛡4 to shield',
    size: CardSize.Medium,
    cardType: CardType.Shield,
  },
  {
    name: 'SNOWBALL',
    description: `Do ❄${N_DAMAGE} damage <br> Freeze ❄1 dice`,
    size: CardSize.Medium,
    cardType: CardType.Ice,
  },
  {
    name: 'TOXIC OOZE',
    description: `Do ⚔${N_DAMAGE} damage, <br> on 6, add 💜2 poison`,
    size: CardSize.Big,
    cardType: CardType.Poison,
  },
];
const SPECIAL_CARDS = [
  {
    name: 'COMBAT ROLL',
    description: 'Reroll a dice',
    size: CardSize.Big,
    cardType: CardType.RerollDice,
    uses: 3,
  },
];

@Injectable({ providedIn: 'root' })
export class CardService {
  cards$ = new BehaviorSubject<Card[]>(this.generateCards());
  specialCards$ = new BehaviorSubject<Card[]>(this.generateSpecialCards());

  generateCards(): Card[] {
    return [...COMBINED_TEST_CARDS];
  }

  generateSpecialCards(): Card[] {
    return [...SPECIAL_CARDS];
  }
}
