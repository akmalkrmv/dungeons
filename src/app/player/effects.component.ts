import { Component, Input } from '@angular/core';
import { ICardEffect } from '../models/card-effect';

@Component({
  selector: 'app-effects',
  styles: [
    `
      .effects {
        display: flex;
        gap: 1rem;
      }
      .effect {
        display: flex;
        align-items: center;
      }
    `,
  ],
  template: ` <div class="effects" *ngIf="effects && effects.length">
    <div *ngFor="let effect of effects" [style.color]="effect.color" class="effect">
      <i class="material-icons">{{ effect.icon }}</i> {{ effect.amount }}
    </div>
  </div>`,
})
export class EffectsComponent {
  @Input() effects: ICardEffect[] = [];
}
