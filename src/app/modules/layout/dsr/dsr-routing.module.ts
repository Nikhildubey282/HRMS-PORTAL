import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DSRComponent } from './dsr.component';

const routes: Routes = [
  {
    path:'',component:DSRComponent,
    children:[
      {
        path:'my-dsr',loadChildren:()=>import('./my-dsr/my-dsr.module').then((m)=>m.MyDsrModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DSRRoutingModule { }
