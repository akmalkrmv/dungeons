import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { CARD_LIST_ENTER_ANIMATION } from '../../animations/card-list-enter';
import { ICard } from '../../models/card';
import { IPlayer } from '../../models/player';
import { BattleService } from '../../services/battle.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [CARD_LIST_ENTER_ANIMATION.TRIGGER],
})
export class CardListComponent implements OnInit {
  @Input() mover!: IPlayer;
  @Input() inverse: boolean = false;
  @Output() cardUsed = new EventEmitter<ICard>();

  private entered = false;

  @HostBinding(CARD_LIST_ENTER_ANIMATION.TRIGGER_NAME) get animation() {
    if (this.entered) return '';
    return this.inverse ? 'inverse' : 'active';
  }
  @HostListener(CARD_LIST_ENTER_ANIMATION.DONE) animationDone() {
    this.entered = true;
  }

  constructor(private battleService: BattleService) {}

  ngOnInit(): void {
    // this.battleService.isPlayersTurn$.subscribe(() => (this.entered = !this.entered));
  }

  useCard(card: ICard) {
    this.cardUsed.emit(card);
  }

  getGridColumnsCount(mover: IPlayer) {
    return mover.initialCardsCount <= 4 ? 2 : 3;
  }

  getGridTemplateColumns(mover: IPlayer): string {
    const columns = this.getGridColumnsCount(mover);
    return `repeat(${columns}, 1fr)`;
  }
  getGridRowStart(mover: IPlayer, index: number): number {
    const columns = this.getGridColumnsCount(mover);
    return Math.ceil((index + 1) / columns);
  }
  getGridColumnStart(mover: IPlayer, index: number): number {
    const columns = this.getGridColumnsCount(mover);
    return (index % columns) + 1;
  }
}
