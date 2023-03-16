import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingRoutingModule } from './requested-training-routing.module';
import { RequestedTrainingComponent } from './requested-training.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';



@NgModule({
  declarations: [
    RequestedTrainingComponent
  ],
  imports: [
    CommonModule,
    RequestedTrainingRoutingModule,
    CommontableModule
  ]
})
export class RequestedTrainingModule { }
