import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {
    path:'',component:TicketsComponent,
    children:[
      
        {
          path:'my-tickets',loadChildren:()=> import('./my-tickets/my-tickets.module').then((m) =>m.MyTicketsModule )
        },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
