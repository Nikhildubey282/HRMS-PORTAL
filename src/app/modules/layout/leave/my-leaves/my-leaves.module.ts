import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommontableModule
  ]
})
export class MyLeavesModule { }
