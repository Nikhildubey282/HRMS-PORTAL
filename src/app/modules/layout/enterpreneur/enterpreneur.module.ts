import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpreneurRoutingModule } from './enterpreneur-routing.module';
import { EnterpreneurComponent } from './enterpreneur.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EnterpreneurComponent
  ],
  imports: [
    CommonModule,
    EnterpreneurRoutingModule,
    MatIconModule
  ]
})
export class EnterpreneurModule { }
