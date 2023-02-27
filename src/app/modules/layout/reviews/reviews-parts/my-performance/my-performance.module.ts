import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    MyPerformanceComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    MatSelectModule,
  ]
})
export class MyPerformanceModule { }
