import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentTrainingComponent } from './department-training.component';

const routes: Routes = [
  {
    path:'',component:DepartmentTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentTrainingRoutingModule { }
