import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { IPlayer } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  level$ = new BehaviorSubject<number>(1);
  chests$ = new BehaviorSubject<any[]>([]);

  enemies$!: Observable<IPlayer[]>;

  constructor(private playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.enemies$ = this.level$.pipe(switchMap((level) => of(this.playerService.getEnemiesByLevel(level))));
  }

  startBattle(enemy: IPlayer) {
    this.playerService.enemy$.next(enemy);
    this.router.navigateByUrl('/battle');
  }

  regenerate() {}
  getNewCard() {}
  upgrade() {}
}
