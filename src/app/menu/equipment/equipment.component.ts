import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';
import { IPlayer, Player } from 'src/app/models/player';
import { BattleService } from 'src/app/services/battle.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  backpack: ICard[] = [];
  equipment: ICard[] = [];
  cardToPreview?: ICard;

  constructor(private playerService: PlayerService, private battleService: BattleService) {}

  ngOnInit(): void {
    this.playerService.player$.subscribe((value: IPlayer) => {
      const player = value as Player;
      this.backpack = player.backpack;
      this.equipment = player.cards;
    });

    this.battleService.resupply(this.playerService.player$);
  }
}
