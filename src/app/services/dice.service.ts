import { Injectable } from '@angular/core';
import { IDice } from '../models/dice';

@Injectable({ providedIn: 'root' })
export class DiceService {
  generateDices(count: number): IDice[] {
    const dices = [];

    for (let i = 0; i < count; i++) {
      dices.push(this.generateRandomDice());
    }

    return dices;
  }

  generateRandomDice(): IDice {
    return { value: Math.ceil(Math.random() * 6) };
  }
}
