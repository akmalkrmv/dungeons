import { NgForOf } from '@angular/common';
import { Injectable } from '@angular/core';
import { Card, CardSize, CardType } from '../models/card';
import { Dice } from '../models/dice';
import { Enemy, Player } from '../models/player';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;

@Injectable({ providedIn: 'root' })
export class BattleService {
  player: Player = {
    name: 'Jamshid',
    maxHealth: 32,
    health: 27,
    maxPower: 20,
    power: 20,
    dicesCount: 4,
    dices: [],
    effects: [],
    equipment: [],
    backpack: [],
    deck: [],
  };

  enemy: Enemy = {
    name: 'Dire Wolf',
    maxHealth: 42,
    health: 42,
    dicesCount: 4,
    dices: [],
    effects: [],
    deck: [],
  };

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

  dices: Dice[] = [
    { value: 1 },
    { value: 6 },
    { value: 2 },
    { value: 1 },
    { value: 5 },
  ];

  constructor() {}

  generateDices() {
    const count = this.player.dicesCount;

    this.dices = [];

    for (let i = 0; i < count; i++) {
      this.dices.push({ value: i });
    }
  }
}
