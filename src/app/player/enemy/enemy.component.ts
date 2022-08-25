import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnemyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
