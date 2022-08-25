import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
  @Input() value!: number;
}
