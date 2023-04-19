import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunchCalendarComponent } from '../lunch-calendar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SelectModule } from '../../select/select.module';


@NgModule({
  declarations: [
    LunchCalendarComponent

  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    SelectModule

  ],
  exports:[
    LunchCalendarComponent,


  ]
})
export class LunchCalendarModule { }
