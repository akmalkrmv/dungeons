import { Component, Input } from '@angular/core';
import { ICardEffect } from '../../models/card-effect';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss'],
})
export class EffectsComponent {
  @Input() effects: ICardEffect[] = [];
}
