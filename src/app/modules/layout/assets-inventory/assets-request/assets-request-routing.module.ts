import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsRequestComponent } from './assets-request.component';

const routes: Routes = [
  {
    path:'',component:AssetsRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRequestRoutingModule { }
