import { BigCard, Card, CardType } from '../models/card';
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

export const CARDS = {
  // ROBOBOT:
  RAY_GUN: new Card('RAY GUN', CardType.Attack, [new DamageAction(3)]),
  
  // SORCERESS:
  CAULDRON: new Card('CAULDRON', CardType.Poison, [new DamageAction(1), new RerollDiceAction()]),
  ICE_SHARD: new Card('ICE SHARD', CardType.Ice, [new DamageAction(), new FreezeAction(1)]),
  INFLICTION: new Card('INFLICTION', CardType.Fire, [new DamageAction(3)]),

  // HEAL_AND_ATTACK:
  HEAL: new Card('HEAL', CardType.Heal, [new HealAction()]),
  ATTACK: new Card('ATTACK', CardType.Attack, [new DoubleDamageAction()]),
  ATTACK_AND_HEAL: new Card('ATTACK AND HEAL', CardType.Neutral, [new DamageAction(), new HealAction()]), // ???

  // EFFECTS:
  BUMP: new Card('BUMP', CardType.Heal, [new BumpDiceAction()]),
  FIRE: new Card('FIRE', CardType.Fire, [new DoubleDamageAction(), new BurnAction()]),
  BUCKLER: new Card('BUCKLER', CardType.Shield, [new ShieldAction(4)]),
  SNOWBALL: new Card('SNOWBALL', CardType.Ice, [new DamageAction(), new FreezeAction()]),
  LOCK: new Card('LOCK', CardType.Neutral, [new LockAction()]),
  TOXIC_OOZE: new Card('TOXIC OOZE', CardType.Poison, [new DamageAction(), new PoisonAction(2)]),

  // DIFFERENT_TYPES:
  BATTLE_AXE: new Card('BATTLE AXE', CardType.Attack, [new DoubleDamageAction()]),
};

export const SPECIAL_CARDS = {
  COMBAT_ROLL: new BigCard('COMBAT ROLL', CardType.Neutral, [new RerollDiceAction()]).assign({
    uses: 3,
  }),
};
