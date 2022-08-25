import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Card } from '../models/card';
import { Dice } from '../models/dice';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card!: Card;
  @Input() dice?: Dice;

  @HostBinding('class') get class() {
    return `${this.card.cardType} size-${this.card.size}`;
  }

  drop(event: CdkDragDrop<Dice[]>) {
    if (event.previousContainer !== event.container) {
      event.previousContainer.data.splice(event.previousIndex, 1);
      this.dice = event.item.data;
    }
  }

  alreadyUsedPredicate = () => {
    return this.dice === undefined;
  };
}
