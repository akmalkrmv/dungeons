import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BattleService } from 'src/app/services/battle.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-choose-character',
  templateUrl: './choose-character.component.html',
  styleUrls: ['./choose-character.component.scss'],
})
export class ChooseCharacterComponent {
  characters$ = this.playerService.characters$;
  player$ = this.playerService.player$;

  constructor(private playerService: PlayerService, private battleService: BattleService, private router: Router) {}

  start() {
    this.battleService.resupply(this.playerService.player$);
    this.router.navigateByUrl('/level');
  }
}
