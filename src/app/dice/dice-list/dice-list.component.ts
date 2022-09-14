import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDice } from 'src/app/models/dice';

@Component({
  selector: 'app-dice-list',
  templateUrl: './dice-list.component.html',
  styleUrls: ['./dice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceListComponent {
  @Input() dices!: IDice[];

  constructor() {}

  drop(event: CdkDragDrop<IDice[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
