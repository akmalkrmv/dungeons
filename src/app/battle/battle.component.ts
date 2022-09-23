import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CARD_LIST_ENTER_ANIMATION } from '../animations/card-list-enter';
import { ICard } from '../models/card';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [CARD_LIST_ENTER_ANIMATION.TRIGGER],
})
export class BattleComponent implements OnInit {
  player$ = this.battle.player$;
  enemy$ = this.battle.enemy$;
  cards$ = this.battle.cards$;
  specialCards$ = this.battle.specialCards$;
  isPlayersTurn$ = this.battle.isPlayersTurn$;
  mover$ = this.battle.mover$;
  taker$ = this.battle.taker$;

  constructor(private battle: BattleService) {}

  ngOnInit(): void {
    this.battle.startBattle();
  }

  endTurn() {
    this.battle.endTurn();
  }

  useCard(card: ICard) {
    this.battle.applyCard(card);

    if (card.uses !== undefined) {
      card.uses = card.uses - 1;
      if (card.uses <= 0) {
        this.destroyCard(card);
      } else {
        this.updateUI();
      }
    } else {
      this.destroyCard(card);
    }
  }

  updateUI() {
    const mover$ = this.battle.getMover();
    mover$.next({ ...mover$.value } as any);
  }

  destroyCard(card: ICard) {
    const mover$ = this.battle.getMover();
    const mover = mover$.value;

    mover$.next({
      ...mover,
      cards: mover.cards.filter((item) => item !== card),
      specialCards: mover.specialCards.filter((item) => item !== card),
    } as any);
  }
}
