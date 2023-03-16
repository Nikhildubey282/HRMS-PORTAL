import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailRoutingModule } from './view-detail-routing.module';
import { ViewDetailComponent } from './view-detail.component';


@NgModule({
  declarations: [
    ViewDetailComponent
  ],
  imports: [
    CommonModule,
    ViewDetailRoutingModule
  ]
})
export class ViewDetailModule { }
