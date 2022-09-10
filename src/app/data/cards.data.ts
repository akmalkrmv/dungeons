import { Card, CardSize, CardType } from '../models/card';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;

export const CARDS = {
  SORCERESS: [
    new Card('CAULDRON', `Do 1 damage, get a new dice`, CardType.Poison),
    new Card('ICE SHARD', `Do ${N_DAMAGE}, Freeze 1 dice`, CardType.Ice),
    new Card('ICE SHARD', `Do ${N_DAMAGE}, Freeze 1 dice`, CardType.Ice),
    new Card('INFLICTION', `Do 3 damage`, CardType.Fire),
  ],

  HEAL_AND_ATTACK: [
    new Card('HEAL', `Heals ${N_DAMAGE}`, CardType.Heal),
    new Card('ATTACK', `Do ⚔2x${N_DAMAGE} damage`, CardType.Heal),
    new Card('ATTACK AND HEAL', 'Attacks then heals', [CardType.Attack, CardType.Heal]), // ???
  ],

  DIFFERENT_TYPES: [
    new Card('BUMP', `Dice value +1`, CardType.Heal),
    new Card('BATTLE AXE', `Do ⚔2x${N_DAMAGE} damage`, CardType.Attack),
    new Card('BUCKLER', `Add 🛡4 to shield`, CardType.Shield),
    new Card('SNOWBALL', `Do ❄${N_DAMAGE} damage <br> Freeze ❄1 dice`, CardType.Ice),
    new Card('TOXIC OOZE', `Do ⚔${N_DAMAGE} damage, <br> on 6, add 💜2 poison`, CardType.Poison, CardSize.Big),
  ],

  SPECIALS: [new Card('COMBAT ROLL', 'Reroll a dice', CardType.Neutral, CardSize.Big).setProperties({ uses: 3 })],
};
