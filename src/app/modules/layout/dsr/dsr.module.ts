import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DSRRoutingModule } from './dsr-routing.module';
import { DSRComponent } from './dsr.component';


@NgModule({
  declarations: [
    DSRComponent
  ],
  imports: [
    CommonModule,
    DSRRoutingModule
  ]
})
export class DSRModule { }
