import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    PunchLogComponent
  ],
  imports: [
    CommonModule,
    PunchLogRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    CommontableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    GetControlModule,
    ValidationErrorModule,
    DropdownModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class PunchLogModule { }
