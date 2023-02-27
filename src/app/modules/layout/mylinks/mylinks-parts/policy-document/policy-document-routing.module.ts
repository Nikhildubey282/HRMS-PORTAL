import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyDocumentComponent } from './policy-document.component';

const routes: Routes = [
  {
    path:'',component:PolicyDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyDocumentRoutingModule { }
