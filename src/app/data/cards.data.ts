import { Card, CardSize, CardType } from '../models/card';
import {
  DamageAction,
  RerollDiceAction,
  FreezeAction,
  HealAction,
  BumpDiceAction,
  BurnAction,
  ShieldAction,
  LockAction,
  PoisonAction,
  DoubleDamageAction,
} from '../models/card-actions';

const DICE = `<i class="material-icons">border_style</i>`;

export const CARDS = {
  SORCERESS: [
    new Card('CAULDRON', `Do 1 damage, get a new dice`, CardType.Poison, [new DamageAction(1), new RerollDiceAction()]),
    new Card('ICE SHARD', `Do ${DICE}, Freeze 1 dice`, CardType.Ice, [new DamageAction(), new FreezeAction(1)]),
    new Card('ICE SHARD', `Do ${DICE}, Freeze 1 dice`, CardType.Ice, [new DamageAction(), new FreezeAction(1)]),
    new Card('INFLICTION', `Do 3 damage`, CardType.Fire, [new DamageAction(3)]),
  ],

  HEAL_AND_ATTACK: [
    new Card('HEAL', `Heals ${DICE}`, CardType.Heal, [new HealAction()]),
    new Card('ATTACK', `Do ⚔2x${DICE} damage`, CardType.Attack, [new DoubleDamageAction()]),
    new Card('ATTACK AND HEAL', 'Attacks then heals', CardType.Neutral, [new DamageAction(), new HealAction()]), // ???
  ],

  EFFECTS: [
    new Card('BUMP', `Dice value +1`, CardType.Heal, [new BumpDiceAction()]),
    new Card('FIRE', `Do ⚔2x${DICE} damage <br> Burn 🔥1 dice`, CardType.Fire, [
      new DoubleDamageAction(),
      new BurnAction(),
    ]),
    new Card('BUCKLER', `Add 🛡4 to shield`, CardType.Shield, [new ShieldAction(4)]),
    new Card('SNOWBALL', `Do ❄${DICE} damage <br> Freeze ❄1 dice`, CardType.Ice, [
      new DamageAction(),
      new FreezeAction(),
    ]),
    new Card('LOCK', `Lock 🔒1 dice`, CardType.Neutral, [new LockAction()]),
    new Card('TOXIC OOZE', `Do ⚔${DICE} damage, <br> on 6, add 💜2 poison`, CardType.Poison, [
      new DamageAction(),
      new PoisonAction(2),
    ]),
  ],

  DIFFERENT_TYPES: [
    new Card('BUMP', `Dice value +1`, CardType.Heal, [new BumpDiceAction()]),
    new Card('BATTLE AXE', `Do ⚔2x${DICE} damage`, CardType.Attack, [new DoubleDamageAction()]),
    new Card('BUCKLER', `Add 🛡4 to shield`, CardType.Shield, [new ShieldAction(4)]),
    new Card('SNOWBALL', `Do ❄${DICE} damage <br> Freeze ❄1 dice`, CardType.Ice, [
      new DamageAction(),
      new FreezeAction(),
    ]),
    new Card(
      'TOXIC OOZE',
      `Do ⚔${DICE} damage, <br> on 6, add 💜2 poison`,
      CardType.Poison,
      [new DamageAction(), new PoisonAction()],
      CardSize.Big
    ),
  ],

  SPECIALS: [
    new Card('COMBAT ROLL', 'Reroll a dice', CardType.Neutral, [new RerollDiceAction()], CardSize.Big).assign({
      uses: 3,
    }),
  ],
};
