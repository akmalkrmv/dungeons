import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  destroyCard(card: Card) {
    const mover$ = this.battle.getMover();
    const mover = mover$.value;

    mover$.next({
      ...mover,
      cards: mover.cards.filter((item) => item !== card),
      specialCards: mover.specialCards.filter((item) => item !== card),
    } as any);
  }
}
