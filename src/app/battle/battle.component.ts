import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { CARD_LIST_ENTER_ANIMATION } from '../animations/card-list-enter';
import { ICard } from '../models/card';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [CARD_LIST_ENTER_ANIMATION.TRIGGER],
})
export class BattleComponent implements OnInit {
  player$ = this.battle.player$;
  enemy$ = this.battle.enemy$;
  cards$ = this.battle.cards$;
  specialCards$ = this.battle.specialCards$;
  isPlayersTurn$ = this.battle.isPlayersTurn$;
  mover$ = this.battle.mover$;
  taker$ = this.battle.taker$;

  images = ['dungeon_1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
  currentImage = this.images[0];

  constructor(private battle: BattleService) {}

  @HostBinding('style.backgroundImage') get backgroundImage() {
    return `url('/assets/images/${this.currentImage}')`;
  }

  ngOnInit(): void {
    // images kolleksiyadan random son chiqdi
    const random = Math.random() * this.images.length;
    //  chiqqan random son kam tarafga yaxlitlandi
    const index = Math.floor(random);
    this.currentImage = this.images[index];

    this.battle.startBattle();
  }

  endTurn() {
    this.battle.endTurn();
  }

  useCard(card: ICard) {
    this.battle.applyCard(card);

    if (card.uses !== undefined) {
      card.uses = card.uses - 1;
      if (card.uses <= 0) {
        this.destroyCard(card);
      } else {
        this.updateUI();
      }
    } else {
      this.destroyCard(card);
    }
  }

  updateUI() {
    const mover$ = this.battle.getMover();
    mover$.next({ ...mover$.value } as any);
  }

  destroyCard(card: ICard) {
    const mover$ = this.battle.getMover();
    const mover = mover$.value;

    mover$.next({
      ...mover,
      cards: mover.cards.filter((item) => item !== card),
      specialCards: mover.specialCards.filter((item) => item !== card),
    } as any);
  }
}
