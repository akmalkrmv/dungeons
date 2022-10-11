import { Component, OnInit } from '@angular/core';
import { CARDS } from 'src/app/data';
import { Card, CardType, ICard } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
})
export class CardPreviewComponent implements OnInit {
  card: ICard = CARDS.ATTACK;

  constructor() {}

  ngOnInit(): void {}
}

export class CdkDragDropOverviewExample {}
