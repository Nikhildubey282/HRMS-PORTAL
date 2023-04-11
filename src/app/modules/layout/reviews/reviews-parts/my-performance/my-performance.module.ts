import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPerformanceRoutingModule } from './my-performance-routing.module';
import { MyPerformanceComponent } from './my-performance.component';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyPerformanceComponent
  ],
  imports: [
    CommonModule,
    MyPerformanceRoutingModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyPerformanceModule { }
