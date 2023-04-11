import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MyLeavesRoutingModule } from './my-leaves-routing.module';
import { MyLeavesComponent } from './my-leaves.component';
import {MatIconModule} from '@angular/material/icon';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';







@NgModule({
  declarations: [
    MyLeavesComponent
  ],
  imports: [
    CommonModule,
    MyLeavesRoutingModule,
    MatIconModule,
    DropdownModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    EditorModule,
    CommontableModule,
    FormsModule,ReactiveFormsModule,
    ValidationErrorModule,
    GetControlModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers:[DatePipe]
})
export class MyLeavesModule { }
