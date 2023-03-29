import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './leave.component';

const routes: Routes = [
  {
    path:'',component:LeaveComponent,
    children:[
      {
        path:'floating-leaves',loadChildren:()=> import('./floating-leaves/floating-leaves.module').then((m) =>m.FloatingLeavesModule )
      },
      {
        path:'my-leaves',loadChildren:()=> import('./my-leaves/my-leaves.module').then((m) =>m.MyLeavesModule )
      },
      {
        path:'leave-details',loadChildren:()=> import('./leave-details/leave-details.module').then((m) =>m.LeaveDetailsModule )
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
