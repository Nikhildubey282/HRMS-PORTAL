import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    ChangepasswordRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class ChangepasswordModule { }
