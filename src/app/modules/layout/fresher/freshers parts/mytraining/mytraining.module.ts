import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytrainingRoutingModule } from './mytraining-routing.module';
import { MytrainingComponent } from './mytraining.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    MytrainingComponent
  ],
  imports: [
    CommonModule,
    MytrainingRoutingModule,
    MatIconModule
  ]
})
export class MytrainingModule { }
