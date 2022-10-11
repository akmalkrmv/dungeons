import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CARDS } from 'src/app/data';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss'],
})
export class BackpackComponent implements OnInit {
  @Input() rows = [0, 1, 2, 3, 4];
  @Input() columns = [0, 1, 2, 3];
  @Input() cards: ICard[] = [];
  @Output() hovered = new EventEmitter<ICard>();
  cardsList: ICard[][] = [];

  ngOnInit(): void {
    const length = this.columns.length;
    for (const row of this.rows) {
      for (const column of this.columns) {
        const card = this.cards[row * length + column];
        this.cardsList.push([card]);
      }
    }
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
