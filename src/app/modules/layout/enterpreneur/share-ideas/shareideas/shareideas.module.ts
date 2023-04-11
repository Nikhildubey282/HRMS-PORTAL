import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareideasRoutingModule } from './shareideas-routing.module';
import { ShareideasComponent } from './shareideas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditorModule } from '@tinymce/tinymce-angular';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';




@NgModule({
  declarations: [
    ShareideasComponent
  ],
  imports: [
    CommonModule,
    ShareideasRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    EditorModule,
    GetControlModule,
    ValidationErrorModule



  ]
})
export class ShareideasModule { }
