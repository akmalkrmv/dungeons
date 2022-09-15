import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ENEMIES } from 'src/app/data';
import { IPlayer } from 'src/app/models/player';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  enemies$ = new BehaviorSubject<IPlayer[]>(Object.values(ENEMIES));
  chests$ = new BehaviorSubject<any[]>([]);

  constructor() {}

  ngOnInit(): void {}
}
