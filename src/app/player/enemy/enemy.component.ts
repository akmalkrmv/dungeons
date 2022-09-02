import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Enemy } from 'src/app/models/player';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnemyComponent {
  @Input() enemy!: Enemy;
}
