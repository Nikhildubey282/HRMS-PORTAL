import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOpeningRoutingModule } from './job-opening-routing.module';
import { JobOpeningComponent } from './job-opening.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    JobOpeningComponent
  ],
  imports: [
    CommonModule,
    JobOpeningRoutingModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class JobOpeningModule { }
