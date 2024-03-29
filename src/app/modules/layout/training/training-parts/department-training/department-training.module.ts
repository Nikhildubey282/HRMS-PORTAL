import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentTrainingRoutingModule } from './department-training-routing.module';
import { DepartmentTrainingComponent } from './department-training.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddTrainingComponent } from './dialog-component/add-training/add-training.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';





@NgModule({
  declarations: [
    DepartmentTrainingComponent,
    AddTrainingComponent
  ],
  imports: [
    CommonModule,
    DepartmentTrainingRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    GetControlModule,
    ValidationErrorModule


  ]
})
export class DepartmentTrainingModule { }
