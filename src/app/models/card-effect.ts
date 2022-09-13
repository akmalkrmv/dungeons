import { IBattleInfo } from './battle-info';

export interface ICardEffect {
  name: string;
  icon: string;
  color: string;
  amount: number;

  apply(battle: IBattleInfo): IBattleInfo;
}

export class BurnEffect implements ICardEffect {
  name = 'Burn';
  icon = 'local_fire_department';
  color = 'red';
  constructor(public amount: number) {}

  apply(battle: IBattleInfo): IBattleInfo {
    return { ...battle, enemy: { ...battle.enemy, dices: [...battle.enemy.dices] } };
  }
}
export class LockEffect implements ICardEffect {
  name = 'Lock';
  icon = 'lock';
  color = 'yellow';
  constructor(public amount: number) {}

  apply(battle: IBattleInfo): IBattleInfo {
    return { ...battle };
  }
}
export class FreezeEffect implements ICardEffect {
  name = 'Freeze';
  icon = 'ac_unit';
  color = '#6ed5f7';
  constructor(public amount: number) {}

  apply(battle: IBattleInfo): IBattleInfo {
    // TODO: JMSHD> реализовать лёд эффект
    return { ...battle };
  }
}
export class PoisonEffect implements ICardEffect {
  name = 'Poison';
  icon = 'science';
  color = 'magenta';
  constructor(public amount: number) {}

  apply(battle: IBattleInfo): IBattleInfo {
    const { enemy } = battle;
    const updated = { ...enemy, health: Math.max(0, enemy.health - this.amount) };

    this.amount = this.amount - 1;

    if (this.amount <= 0) {
      updated.effects = updated.effects.filter((item) => item.name !== this.name);
    }
    
    return { ...battle, enemy: updated };
  }
}
export class ShieldEffect implements ICardEffect {
  name = 'Shield';
  icon = 'shield';
  color = 'orange';
  constructor(public amount: number) {}

  apply(battle: IBattleInfo): IBattleInfo {
    return { ...battle };
  }
}
