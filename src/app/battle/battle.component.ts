import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BattleComponent implements OnInit {
  player = this.battle.player;
  enemy = this.battle.enemy;
  cards = this.battle.cards;
  specialCards = this.battle.specialCards;
  dices = this.battle.dices;

  constructor(private battle: BattleService) {}

  ngOnInit(): void {
    this.dices = this.battle.generateDices();
  }
}
