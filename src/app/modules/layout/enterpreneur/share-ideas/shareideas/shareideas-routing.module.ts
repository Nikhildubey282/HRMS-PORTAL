import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareideasComponent } from './shareideas.component';

const routes: Routes = [
  {path:'',component:ShareideasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareideasRoutingModule { }
