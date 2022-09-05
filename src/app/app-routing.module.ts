import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { LossComponent } from './battle/finish/loss/loss.component';
import { VictoryComponent } from './battle/finish/victory/victory.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'battle' },
  { path: 'battle', component: BattleComponent },
  { path: 'battle/loss', component: LossComponent },
  { path: 'battle/victory', component: VictoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
