import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpreneurRoutingModule } from './enterpreneur-routing.module';
import { EnterpreneurComponent } from './enterpreneur.component';


@NgModule({
  declarations: [
    EnterpreneurComponent
  ],
  imports: [
    CommonModule,
    EnterpreneurRoutingModule
  ]
})
export class EnterpreneurModule { }
