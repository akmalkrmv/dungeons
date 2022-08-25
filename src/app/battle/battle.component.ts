import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card, CardSize, CardType } from '../models/card';
import { Dice } from '../models/dice';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattleComponent implements OnInit {
  cards: Card[] = [
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

  specialCards: Card[] = [
    {
      name: 'COMBAT ROLL',
      description: 'Reroll a dice <br> (One use this turn)',
      size: CardSize.Big,
      cardType: CardType.Neutral,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
