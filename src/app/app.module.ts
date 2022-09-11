import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BattleComponent } from './battle/battle.component';
import { DiceComponent } from './dice/dice.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import { DiceListComponent } from './dice/dice-list/dice-list.component';
import { EnemyComponent } from './player/enemy/enemy.component';
import { VictoryComponent } from './battle/finish/victory/victory.component';
import { LossComponent } from './battle/finish/loss/loss.component';
import { EffectsComponent } from './player/effects.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BattleComponent,
    DiceComponent,
    PlayerDetailsComponent,
    DiceListComponent,
    EnemyComponent,
    VictoryComponent,
    LossComponent,
    EffectsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
