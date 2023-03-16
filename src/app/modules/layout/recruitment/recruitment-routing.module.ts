import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentComponent } from './recruitment.component';

const routes: Routes = [
  {
    path:'',component:RecruitmentComponent,
    children:[
      {
        path:'',redirectTo:'interview-list',pathMatch:'full'
      },
      {
        path:'interview-list',loadChildren:()=>import('./interview-list/interview-list.module').then((m)=>m.InterviewListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
