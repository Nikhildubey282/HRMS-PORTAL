import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpreneurComponent } from './enterpreneur.component';

const routes: Routes = [
  {
    path:'',component:EnterpreneurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterpreneurRoutingModule { }
