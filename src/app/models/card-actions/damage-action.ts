import { ShieldEffect } from '../card-effect';
import { IBattleInfo } from '../battle-info';
import { IDice } from '../dice';
import { ICardAction } from './card-action';

const DICE = `<i class="material-icons">border_style</i>`;

export class DamageAction implements ICardAction {
  description = `Do ⚔${this.damage || DICE} damage`;

  constructor(protected damage: number = 0) {}

  protected getDamage(dice: IDice) {
    return this.damage || dice.value;
  }

  act(battle: IBattleInfo): IBattleInfo {
    let { enemy, dice } = battle;
    let damage = this.getDamage(dice);

    const shield = enemy.effects.find((effect) => effect instanceof ShieldEffect);
    if (shield) {
      if (damage > shield.amount) {
        damage = damage - shield.amount;
        enemy = { ...enemy, health: Math.max(0, enemy.health - damage) };
        enemy = { ...enemy, effects: enemy.effects.filter((effect) => effect !== shield) };
      } else {
        shield.amount = shield.amount - damage;
      }

      return { ...battle, enemy: { ...enemy } };
    }

    return { ...battle, enemy: { ...enemy, health: Math.max(0, enemy.health - damage) } };
  }
}

export class DoubleDamageAction extends DamageAction {
  override description = `Do ⚔2x${this.damage || DICE} damage`;

  constructor(damage: number = 0) {
    super(damage);
  }

  protected override getDamage(dice: IDice): number {
    return (this.damage || dice.value) * 2;
  }
}

export class TripleDamageAction extends DamageAction {
  override description = `Do ⚔3x${this.damage || DICE} damage`;

  constructor(damage: number = 0) {
    super(damage);
  }

  protected override getDamage(dice: IDice): number {
    return (this.damage || dice.value) * 3;
  }
}
