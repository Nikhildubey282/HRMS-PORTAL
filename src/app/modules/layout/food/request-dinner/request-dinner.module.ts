import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestDinnerRoutingModule } from './request-dinner-routing.module';
import { RequestDinnerComponent } from './request-dinner.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    RequestDinnerComponent
  ],
  imports: [
    CommonModule,
    RequestDinnerRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    DropdownModule,
    EditorModule
  ]
})
export class RequestDinnerModule { }
