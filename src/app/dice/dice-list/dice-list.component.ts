import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Dice } from 'src/app/models/dice';

@Component({
  selector: 'app-dice-list',
  templateUrl: './dice-list.component.html',
  styleUrls: ['./dice-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceListComponent implements OnInit {
  @Input() dices!: Dice[];

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Dice[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
