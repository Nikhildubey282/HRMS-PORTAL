import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingTrainingRoutingModule } from './upcoming-training-routing.module';
import { UpcomingTrainingComponent } from './upcoming-training.component';
import { CancelEnrollmentComponent } from './dialogcomponent/cancel-enrollment/cancel-enrollment.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [


    UpcomingTrainingComponent,
        CancelEnrollmentComponent
  ],
  imports: [
    CommonModule,
    UpcomingTrainingRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
MatInputModule,
FormsModule,
ReactiveFormsModule

  ]
})
export class UpcomingTrainingModule { }
