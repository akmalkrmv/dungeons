import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-equipped',
  templateUrl: './equipped.component.html',
  styleUrls: ['./equipped.component.scss'],
})
export class EquippedComponent implements OnInit {
  @Input() rows = [0, 1];
  @Input() columns = [0, 1, 2];
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

  drop(event: CdkDragDrop<ICard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
