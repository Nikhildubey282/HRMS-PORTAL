import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';





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
    ReactiveFormsModule,
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ValidationErrorModule,
    GetControlModule

    ]
})
export class BasicInfoModule { }
