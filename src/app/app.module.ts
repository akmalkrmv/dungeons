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
import { ChooseCharacterComponent } from './menu/choose-character/choose-character.component';
import { LevelComponent } from './menu/level/level.component';
import { EquipmentComponent } from './menu/equipment/equipment.component';
import { LevelStatsComponent } from './menu/level-stats/level-stats.component';
import { CardListComponent } from './card-list/card-list.component';
import { HealthBarComponent } from './health-bar/health-bar.component';

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
    ChooseCharacterComponent,
    LevelComponent,
    EquipmentComponent,
    LevelStatsComponent,
    CardListComponent,
    HealthBarComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
