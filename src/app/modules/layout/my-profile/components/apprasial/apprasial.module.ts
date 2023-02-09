import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprasialRoutingModule } from './apprasial-routing.module';
import { ApprasialComponent } from './apprasial.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    ApprasialComponent
  ],
  imports: [
    CommonModule,
    ApprasialRoutingModule,
    MatFormFieldModule,
    MatSelectModule

  ]
})
export class ApprasialModule { }
