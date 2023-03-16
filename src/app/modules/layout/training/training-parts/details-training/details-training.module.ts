import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsTrainingRoutingModule } from './details-training-routing.module';
import { DetailsTrainingComponent } from './details-training.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    DetailsTrainingComponent
  ],
  imports: [
    CommonModule,
    DetailsTrainingRoutingModule,
    MatIconModule
  ]
})
export class DetailsTrainingModule { }
