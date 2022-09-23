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
  // SORCERESS:
  CAULDRON: new Card('CAULDRON', `Do 1 damage, get a new dice`, CardType.Poison, [
    new DamageAction(1),
    new RerollDiceAction(),
  ]),
  ICE_SHARD: new Card('ICE SHARD', `Do ${DICE}, Freeze 1 dice`, CardType.Ice, [
    new DamageAction(),
    new FreezeAction(1),
  ]),
  INFLICTION: new Card('INFLICTION', `Do 3 damage`, CardType.Fire, [new DamageAction(3)]),

  // HEAL_AND_ATTACK:
  HEAL: new Card('HEAL', `Heals ${DICE}`, CardType.Heal, [new HealAction()]),
  ATTACK: new Card('ATTACK', `Do ⚔2x${DICE} damage`, CardType.Attack, [new DoubleDamageAction()]),
  ATTACK_AND_HEAL: new Card('ATTACK AND HEAL', 'Attacks then heals', CardType.Neutral, [
    new DamageAction(),
    new HealAction(),
  ]), // ???

  // EFFECTS:
  BUMP: new Card('BUMP', `Dice value +1`, CardType.Heal, [new BumpDiceAction()]),
  FIRE: new Card('FIRE', `Do ⚔2x${DICE} damage <br> Burn 🔥1 dice`, CardType.Fire, [
    new DoubleDamageAction(),
    new BurnAction(),
  ]),
  BUCKLER: new Card('BUCKLER', `Add 🛡4 to shield`, CardType.Shield, [new ShieldAction(4)]),
  SNOWBALL: new Card('SNOWBALL', `Do ❄${DICE} damage <br> Freeze ❄1 dice`, CardType.Ice, [
    new DamageAction(),
    new FreezeAction(),
  ]),
  LOCK: new Card('LOCK', `Lock 🔒1 dice`, CardType.Neutral, [new LockAction()]),
  TOXIC_OOZE: new Card('TOXIC OOZE', `Do ⚔${DICE} damage, <br> on 6, add 💜2 poison`, CardType.Poison, [
    new DamageAction(),
    new PoisonAction(2),
  ]),

  // DIFFERENT_TYPES:
  BATTLE_AXE: new Card('BATTLE AXE', `Do ⚔2x${DICE} damage`, CardType.Attack, [new DoubleDamageAction()]),
};

export const SPECIAL_CARDS = {
  COMBAT_ROLL: new Card(
    'COMBAT ROLL',
    'Reroll a dice',
    CardType.Neutral,
    [new RerollDiceAction()],
    CardSize.Big
  ).assign({
    uses: 3,
  }),
};
