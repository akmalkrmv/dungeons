import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, CardSize, CardType } from '../models/card';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;

@Injectable({ providedIn: 'root' })
export class CardService {
  cards$ = new BehaviorSubject<Card[]>([
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
  ]);

  specialCards$ = new BehaviorSubject<Card[]>([
    {
      name: 'COMBAT ROLL',
      description: 'Reroll a dice',
      size: CardSize.Big,
      cardType: CardType.Neutral,
      uses: 3
    },
  ]);
}
