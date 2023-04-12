import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './Components/info/info.component';
import { AddOnsComponent } from './Components/add-ons/add-ons.component';
import { PlanComponent } from './Components/plan/plan.component';
import { SummeryComponent } from './Components/summery/summery.component';
import { SuccessComponent } from './Components/success/success.component';
const routes: Routes = [
  // { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: '', component: InfoComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'add-ons', component: AddOnsComponent },
  { path: 'summery', component: SummeryComponent },
  {path: 'success', component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
