export interface ICardEffect {
  name: string;
  icon: string;
  color: string;
  amount: number;
}

export class BurnEffect implements ICardEffect {
  name = 'Burn';
  icon = 'local_fire_department';
  color = 'red';
  constructor(public amount: number) {}
}
export class LockEffect implements ICardEffect {
  name = 'Lock';
  icon = 'lock';
  color = 'yellow';
  constructor(public amount: number) {}
}
export class FreezeEffect implements ICardEffect {
  name = 'Freeze';
  icon = 'ac_unit';
  color = '#6ed5f7';
  constructor(public amount: number) {}
}
export class PoisonEffect implements ICardEffect {
  name = 'Poison';
  icon = 'science';
  color = 'magenta';
  constructor(public amount: number) {}
}
export class ShieldEffect implements ICardEffect {
  name = 'Shield';
  icon = 'shield';
  color = 'orange';
  constructor(public amount: number) {}
}
