import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ENEMIES } from 'src/app/data';
import { IPlayer } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  enemies$ = new BehaviorSubject<IPlayer[]>(Object.values(ENEMIES));
  chests$ = new BehaviorSubject<any[]>([]);

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {}

  startBattle(enemy: IPlayer) {
    this.playerService.enemy$.next(enemy);
    this.router.navigateByUrl('/battle');
  }

  regenerate() {}
  getNewCard() {}
  upgrade() {}
}
