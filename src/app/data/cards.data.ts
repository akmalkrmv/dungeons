import { CardSize, CardType } from '../models/card';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;

export const CARDS = {
  SORCERESS: [
    {
      name: 'CAULDRON',
      description: `Do 1 damage, get a new dice`,
      size: CardSize.Medium,
      cardType: CardType.Poison,
    },
    {
      name: 'ICE SHARD',
      description: `Do ${N_DAMAGE}, Freeze 1 dice`,
      size: CardSize.Medium,
      cardType: CardType.Ice,
    },
    {
      name: 'ICE SHARD',
      description: `Do ${N_DAMAGE}, Freeze 1 dice`,
      size: CardSize.Medium,
      cardType: CardType.Ice,
    },
    {
      name: 'INFLICTION',
      description: `Do 3 damage`,
      size: CardSize.Medium,
      cardType: CardType.Fire,
    },
  ],

  HEAL_AND_ATTACK: [
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
  ],

  DIFFERENT_TYPES: [
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
  ],
  
  SPECIALS: [
    {
      name: 'COMBAT ROLL',
      description: 'Reroll a dice',
      size: CardSize.Big,
      cardType: CardType.RerollDice,
      uses: 3,
    },
  ],
};
