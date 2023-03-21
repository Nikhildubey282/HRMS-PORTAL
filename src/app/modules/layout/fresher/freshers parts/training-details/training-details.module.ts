import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailsComponent } from './training-details.component';
import {MatTabsModule} from '@angular/material/tabs';
// import { FeedbackComponent } from './dialog-component/feedback/feedback.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    TrainingDetailsComponent,
    // FeedbackComponent
  ],
  imports: [
    CommonModule,
    TrainingDetailsRoutingModule,
     MatTabsModule,
     MatIconModule,
     FormsModule,
     ReactiveFormsModule,
     MatRadioModule,
     MatFormFieldModule,
     MatInputModule



  ]
})
export class TrainingDetailsModule { }
