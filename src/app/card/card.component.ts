import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Card } from '../models/card';
import { Dice } from '../models/dice';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('popOut', [
      transition('* => active', [
        style({ position: 'absolute', zIndex: 999 }),
        animate(
          '1s',
          keyframes([
            style({ top: '-100px' }),
            style({ top: '100px' }),
            style({ top: '-5000px' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class CardComponent {
  @Input() card!: Card;
  @Input() dice?: Dice;
  @Output() destroyed = new EventEmitter<Card>();

  @HostBinding('class') get class() {
    return `${this.card.cardType} size-${this.card.size}`;
  }
  @HostBinding('@popOut') get popOut() {
    return this.dice === undefined ? '' : 'active';
  }

  constructor(private battle: BattleService) {}

  @HostListener('@popOut.done') popOutDone() {
    this.dice && this.destroyed.emit(this.card);
  }

  drop(event: CdkDragDrop<Dice[]>) {
    if (event.previousContainer !== event.container) {
      event.previousContainer.data.splice(event.previousIndex, 1);
      this.dice = event.item.data;
      this.card.dice = this.dice;
      this.battle.applyCard(this.card);
    }
  }

  alreadyUsedPredicate = () => {
    return this.dice === undefined;
  };
}
