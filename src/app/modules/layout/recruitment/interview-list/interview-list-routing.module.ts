import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewListComponent } from './interview-list.component';

const routes: Routes = [
  {
    path:'',component:InterviewListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewListRoutingModule { }
