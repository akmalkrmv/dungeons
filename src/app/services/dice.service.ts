import { Injectable } from '@angular/core';
import { Dice } from '../models/dice';

@Injectable({ providedIn: 'root' })
export class DiceService {
  generateDices(count: number): Dice[] {
    const dices = [];

    for (let i = 0; i < count; i++) {
      dices.push(this.generateRandomDice());
    }

    return dices;
  }

  generateRandomDice(): Dice {
    return { value: Math.ceil(Math.random() * 6) };
  }
}
