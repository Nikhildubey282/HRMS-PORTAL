import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAssetsComponent } from '../../assets-inventory/my-assets/my-assets.component';
import { MyLeavesComponent } from './my-leaves.component';

const routes: Routes = [
  {
    path:'',component:MyLeavesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLeavesRoutingModule { }
