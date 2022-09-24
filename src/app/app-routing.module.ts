import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { LossComponent } from './battle/finish/loss/loss.component';
import { VictoryComponent } from './battle/finish/victory/victory.component';
import { ChooseCharacterComponent } from './menu/choose-character/choose-character.component';
import { LevelComponent } from './menu/level/level.component';
import { EquipmentComponent } from './menu/equipment/equipment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'choose-character' },
  { path: 'battle', component: BattleComponent },
  { path: 'battle/loss', component: LossComponent },
  { path: 'battle/victory', component: VictoryComponent },
  { path: 'choose-character', component: ChooseCharacterComponent },
  { path: 'level', component: LevelComponent },
  { path: 'equipment', component: EquipmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
