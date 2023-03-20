import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTicketsRoutingModule } from './my-tickets-routing.module';
import { MyTicketsComponent } from './my-tickets.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    MyTicketsComponent
  ],
  imports: [
    CommonModule,
    MyTicketsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    CommontableModule,
    DropdownModule,
    EditorModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class MyTicketsModule { }
