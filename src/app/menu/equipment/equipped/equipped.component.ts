import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-equipped',
  templateUrl: './equipped.component.html',
  styleUrls: ['./equipped.component.scss'],
})
export class EquippedComponent implements OnInit {
  rows = [0, 1];
  columns = [0, 1, 2];
  cards: ICard[][] = [];

  constructor() {}

  ngOnInit(): void {
    for (const row of this.rows) {
      for (const column of this.columns) {
        this.cards.push([]);
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
