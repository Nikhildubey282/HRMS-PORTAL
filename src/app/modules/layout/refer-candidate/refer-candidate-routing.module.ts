import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferCandidateComponent } from './refer-candidate.component';

const routes: Routes = [
  {
    path:'',component:ReferCandidateComponent,
    children:[
      {path:'',redirectTo:'job-opening',pathMatch:'full'},
      {
        path:'job-opening',loadChildren:()=>import('./refer-candidate parts/job-opening/job-opening.module').then((m)=>m.JobOpeningModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferCandidateRoutingModule { }
