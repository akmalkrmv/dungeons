import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';
import { DICE_LIST_ENTER_ANIMATION } from 'src/app/animations';
import { IDice } from 'src/app/models/dice';

@Component({
  selector: 'app-dice-list',
  templateUrl: './dice-list.component.html',
  styleUrls: ['./dice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [DICE_LIST_ENTER_ANIMATION.TRIGGER],
})
export class DiceListComponent {
  @Input() dices!: IDice[];
  @Input() inverse!: boolean;
  private entered = false;

  @HostBinding(DICE_LIST_ENTER_ANIMATION.TRIGGER_NAME) get animation() {
    if (this.entered) return '';
    return this.inverse ? 'inverse' : 'active';
  }
  @HostListener(DICE_LIST_ENTER_ANIMATION.DONE) animationDone() {
    this.entered = true;
  }

  constructor() {}

  drop(event: CdkDragDrop<IDice[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
