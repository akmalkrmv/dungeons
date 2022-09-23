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
import { ICard } from '../models/card';
import { IDice } from '../models/dice';
import { ACTIVATE_CARD_ANIMATION } from '../animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ACTIVATE_CARD_ANIMATION.TRIGGER],
})
export class CardComponent {
  @Input() card!: ICard;
  @Input() dice?: IDice;
  @Output() used = new EventEmitter<ICard>();

  @HostBinding('class') get class() {
    return `${this.card.cardType} size-${this.card.size}`;
  }
  @HostBinding(ACTIVATE_CARD_ANIMATION.TRIGGER_NAME) get animation() {
    return this.dice === undefined ? '' : 'active';
  }
  @HostListener(ACTIVATE_CARD_ANIMATION.DONE) animationDone() {
    this.dice && this.used.emit(this.card);
    this.dice = undefined;
  }

  drop(event: CdkDragDrop<IDice[]>) {
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
