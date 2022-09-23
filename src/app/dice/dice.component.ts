import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';
import { DICE_ENTER_ANIMATION } from '../animations';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [DICE_ENTER_ANIMATION.TRIGGER],
})
export class DiceComponent {
  @Input() value!: number;
  private entered = false;

  @HostBinding(DICE_ENTER_ANIMATION.TRIGGER_NAME) get animation() {
    return this.entered ? '' : 'active';
  }
  @HostListener(DICE_ENTER_ANIMATION.DONE) animationDone() {
    this.entered = true;
  }
}
