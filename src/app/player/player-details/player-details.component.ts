import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPlayer } from 'src/app/models/player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDetailsComponent {
  @Input() player!: IPlayer;
}
