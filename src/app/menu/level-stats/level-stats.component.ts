import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-level-stats',
  templateUrl: './level-stats.component.html',
  styleUrls: ['./level-stats.component.scss'],
})
export class LevelStatsComponent implements OnInit {
  @Input() inEquipmentMenu = false;

  player$ = this.playerService.player$;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}
}
