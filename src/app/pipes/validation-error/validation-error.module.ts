import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorPipe } from './validation-error.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ValidationErrorPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ValidationErrorPipe
  ]
})
export class ValidationErrorModule { }
