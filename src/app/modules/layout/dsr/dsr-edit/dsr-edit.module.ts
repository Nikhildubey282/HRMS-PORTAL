import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DsrEditRoutingModule } from './dsr-edit-routing.module';
import { DsrEditComponent } from './dsr-edit.component';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DsrEditComponent
  ],
  imports: [
    CommonModule,
    DsrEditRoutingModule,
    DropdownModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DsrEditModule { }
