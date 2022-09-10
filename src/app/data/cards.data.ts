import { Card, CardSize, CardType } from '../models/card';
import {
  BumpDiceAction,
  DamageAction,
  FreezeAction,
  HealAction,
  PoisonAction,
  RerollDiceAction,
  ShieldAction,
} from '../models/card-action';
import { PoisonEffect } from '../models/card-effect';

const N_DAMAGE = `<i class="material-icons">border_style</i>`;

export const CARDS = {
  SORCERESS: [
    new Card('CAULDRON', `Do 1 damage, get a new dice`, CardType.Poison),
    new Card('ICE SHARD', `Do ${N_DAMAGE}, Freeze 1 dice`, CardType.Ice),
    new Card('ICE SHARD', `Do ${N_DAMAGE}, Freeze 1 dice`, CardType.Ice),
    new Card('INFLICTION', `Do 3 damage`, CardType.Fire),
  ],

  HEAL_AND_ATTACK: [
    new Card('HEAL', `Heals ${N_DAMAGE}`, CardType.Heal, [new HealAction()]),
    new Card('ATTACK', `Do ⚔2x${N_DAMAGE} damage`, CardType.Attack, [new DamageAction()]),
    new Card('ATTACK AND HEAL', 'Attacks then heals', CardType.Attack, [new DamageAction(), new HealAction()]), // ???
  ],

  DIFFERENT_TYPES: [
    new Card('BUMP', `Dice value +1`, CardType.Heal, [new BumpDiceAction()]),
    new Card('BATTLE AXE', `Do ⚔2x${N_DAMAGE} damage`, CardType.Attack, [new DamageAction()]),
    new Card('BUCKLER', `Add 🛡4 to shield`, CardType.Shield, [new ShieldAction(4)]),
    new Card('SNOWBALL', `Do ❄${N_DAMAGE} damage <br> Freeze ❄1 dice`, CardType.Ice, [
      new DamageAction(),
      new FreezeAction(),
    ]),
    new Card(
      'TOXIC OOZE',
      `Do ⚔${N_DAMAGE} damage, <br> on 6, add 💜2 poison`,
      CardType.Poison,
      [new DamageAction(), new PoisonAction()],
      CardSize.Big
    ),
  ],

  SPECIALS: [
    new Card('COMBAT ROLL', 'Reroll a dice', CardType.Neutral, [new RerollDiceAction()], CardSize.Big).setProperties({
      uses: 3,
    }),
  ],
};
