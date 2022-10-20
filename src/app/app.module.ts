import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Main module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// TODO: Create Components module for these stuff:
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { DiceComponent } from './components/dice/dice.component';
import { DiceListComponent } from './components/dice-list/dice-list.component';
import { HealthBarComponent } from './components/health-bar/health-bar.component';
import { LevelBarComponent } from './components/level-bar/level-bar.component';

// TODO: Create Battle module for these stuff:
import { BattleComponent } from './battle/battle.component';
import { LossComponent } from './battle/finish/loss/loss.component';
import { VictoryComponent } from './battle/finish/victory/victory.component';

// TODO: Create Player module for these stuff:
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import { EnemyComponent } from './player/enemy/enemy.component';
import { EffectsComponent } from './player/effects/effects.component';

// TODO: Create Menu module for these stuff:
import { ChooseCharacterComponent } from './menu/choose-character/choose-character.component';
import { LevelComponent } from './menu/level/level.component';
import { EquipmentComponent } from './menu/equipment/equipment.component';
import { LevelStatsComponent } from './menu/level-stats/level-stats.component';
import { BackpackComponent } from './menu/equipment/backpack/backpack.component';
import { CardPreviewComponent } from './menu/equipment/card-preview/card-preview.component';
import { EquippedComponent } from './menu/equipment/equipped/equipped.component';

@NgModule({
  declarations: [
    // Main App
    AppComponent,

    // TODO: Components module stuff, remove declarations from here:
    CardComponent,
    CardListComponent,
    DiceComponent,
    DiceListComponent,
    HealthBarComponent,

    // TODO: Battle module stuff, remove declarations from here:
    BattleComponent,
    LossComponent,
    VictoryComponent,

    // TODO: Player module stuff, remove declarations from here:
    PlayerDetailsComponent,
    EnemyComponent,
    EffectsComponent,

    // TODO: Menu module stuff, remove declarations from here:
    ChooseCharacterComponent,
    // Menu > Level stuff:
    LevelComponent,
    LevelStatsComponent,
    // Menu > Equipment stuff:
    EquipmentComponent,
    BackpackComponent,
    CardPreviewComponent,
    EquippedComponent,
    LevelBarComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
