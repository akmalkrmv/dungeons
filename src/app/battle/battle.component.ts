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
  dices$ = this.battle.dices$;
  isPlayersTurn$ = this.battle.isPlayersTurn$;

  constructor(private battle: BattleService) {}

  ngOnInit(): void {
    this.battle.startBattle();
  }

  endTurn() {
    this.battle.endTurn();
  }

  destroyCard(card: Card) {
    this.cards$.next(this.cards$.value.filter((item) => item !== card));
    this.specialCards$.next(this.specialCards$.value.filter((item) => item !== card));
  }
}
