import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DSRComponent } from './dsr.component';

const routes: Routes = [
  {
    path:'',component:DSRComponent,
    children:[
      {
        path:'my-dsr',loadChildren:()=>import('./my-dsr/my-dsr.module').then((m)=>m.MyDsrModule)
      },
      {
        path:'dsr-detail',loadChildren:()=>import('./dsr-detail/dsr-detail.module').then((m)=>m.DsrDetailModule)
      },
      {
        path:'dsr-edit',loadChildren:()=>import('./dsr-edit/dsr-edit.module').then((m)=>m.DsrEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DSRRoutingModule { }
