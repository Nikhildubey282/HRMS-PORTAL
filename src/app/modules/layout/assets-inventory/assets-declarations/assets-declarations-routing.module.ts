import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDeclarationsComponent } from './assets-declarations.component';

const routes: Routes = [
  {
    path:'',component:AssetsDeclarationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsDeclarationsRoutingModule { }
