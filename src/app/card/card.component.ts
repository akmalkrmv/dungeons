import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Card } from '../models/card';
import { Dice } from '../models/dice';
import { popUp } from '../animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [popUp],
})
export class CardComponent {
  @Input() card!: Card;
  @Input() dice?: Dice;
  @Output() used = new EventEmitter<Card>();

  @HostBinding('class') get class() {
    return `${this.card.cardType} size-${this.card.size}`;
  }
  @HostBinding('@popUp') get popUp() {
    return this.dice === undefined ? '' : 'active';
  }

  @HostListener('@popUp.done') popUpDone() {
    this.dice && this.used.emit(this.card);
    this.dice = undefined;
  }

  drop(event: CdkDragDrop<Dice[]>) {
    if (event.previousContainer !== event.container) {
      event.previousContainer.data.splice(event.previousIndex, 1);
      this.dice = event.item.data;
      this.card.dice = this.dice;
    }
  }

  alreadyUsedPredicate = () => {
    return this.dice === undefined;
  };
}
