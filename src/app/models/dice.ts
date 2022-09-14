export interface IDice {
  value: number;
}

export class Dice implements IDice {
  constructor(public value: number) {}
}
