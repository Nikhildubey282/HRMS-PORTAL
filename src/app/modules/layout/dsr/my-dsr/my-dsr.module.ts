import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDsrRoutingModule } from './my-dsr-routing.module';
import { MyDsrComponent } from './my-dsr.component';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

// import { ToastrModule } from 'ngx-toastr';







@NgModule({
  declarations: [
    MyDsrComponent
  ],
  providers:[SnackBarService],
  imports: [
    CommonModule,
    MyDsrRoutingModule,
    DropdownModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    CommontableModule,
    NgxMatTimepickerModule


  ]
})
export class MyDsrModule { }