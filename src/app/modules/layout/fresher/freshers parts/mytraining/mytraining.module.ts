import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytrainingRoutingModule } from './mytraining-routing.module';
import { MytrainingComponent } from './mytraining.component';
import {MatIconModule} from '@angular/material/icon';
import { FeedbackComponent } from '../training-details/dialog-component/feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';



@NgModule({
  declarations: [
    MytrainingComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    MytrainingRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    GetControlModule,
    ValidationErrorModule
  ]
})
export class MytrainingModule { }
