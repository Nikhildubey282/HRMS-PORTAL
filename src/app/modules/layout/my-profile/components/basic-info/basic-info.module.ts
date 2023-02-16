import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BasicInfoComponent
  ],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class BasicInfoModule { }
