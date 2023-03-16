import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferCandidateComponent } from './refer-candidate.component';
import { JOBOPENING } from 'src/app/constant/routes';
import { REFERALLIST } from 'src/app/constant/routes';

const routes: Routes = [
  {
    path:'',component:ReferCandidateComponent,
    children:[
      {path:'',redirectTo:'job-opening',pathMatch:'full'},
      {
        path:JOBOPENING,loadChildren:()=>import('./refer-candidate parts/job-opening/job-opening.module').then((m)=>m.JobOpeningModule)
      },
      {
        path:REFERALLIST,loadChildren:()=>import('./refer-candidate parts/referal-list/referal-list.module').then((m)=>m.ReferalListModule)
      },
      {
        path:'view-detail',loadChildren:()=>import('./refer-candidate parts/view-detail/view-detail.module').then((m)=>m.ViewDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferCandidateRoutingModule { }
