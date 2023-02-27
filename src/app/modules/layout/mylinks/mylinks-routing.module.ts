import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MylinksComponent } from './mylinks.component';

const routes: Routes = [
  {
    path:'',component:MylinksComponent,
    children:[
      {
        path:'holiday-calendar',loadChildren:()=>import('./mylinks-parts/holiday-calendar/holiday-calendar.module').then((m)=>m.HolidayCalendarModule)
      },
      {
        path:'policy-document',loadChildren:()=>import('./mylinks-parts/policy-document/policy-document.module').then((m)=>m.PolicyDocumentModule)
      },
      {
        path:'insurance-verification',loadChildren:()=>import('./mylinks-parts/insurance-verification/insurance-verification.module').then((m)=>m.InsuranceVerificationModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MylinksRoutingModule { }
