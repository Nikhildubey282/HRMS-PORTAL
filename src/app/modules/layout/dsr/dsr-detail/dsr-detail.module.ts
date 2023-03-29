import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrDetailRoutingModule } from './dsr-detail-routing.module';
import { DsrDetailComponent } from './dsr-detail.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';



@NgModule({
  declarations: [
    DsrDetailComponent
  ],
  imports: [
    CommonModule,
    DsrDetailRoutingModule,
    CommontableModule
  ]
})
export class DsrDetailModule { }
