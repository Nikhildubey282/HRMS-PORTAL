import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsrDetailComponent } from '../dsr-detail/dsr-detail.component';
import { DsrEditComponent } from './dsr-edit.component';

const routes: Routes = [
  {
    path:'',component:DsrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DsrEditRoutingModule { }
