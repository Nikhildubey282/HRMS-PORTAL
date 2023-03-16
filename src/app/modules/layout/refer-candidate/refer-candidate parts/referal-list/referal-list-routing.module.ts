import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReferalListComponent } from './referal-list.component';

const routes: Routes = [
  {
    path:'',component:ReferalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferalListRoutingModule { }
