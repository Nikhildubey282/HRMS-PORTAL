import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MytrainingComponent } from './mytraining.component';

const routes: Routes = [
  {
    path:'',component:MytrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytrainingRoutingModule { }
