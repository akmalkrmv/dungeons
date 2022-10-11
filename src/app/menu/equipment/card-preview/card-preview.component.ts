import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss'],
})
export class CardPreviewComponent {
  @Input() card?: ICard;
}
