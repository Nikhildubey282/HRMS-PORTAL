import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferCandidateRoutingModule } from './refer-candidate-routing.module';
import { ReferCandidateComponent } from './refer-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ReferCandidateComponent
  ],
  imports: [
    CommonModule,
    ReferCandidateRoutingModule,
   

  ]
})
export class ReferCandidateModule { }
