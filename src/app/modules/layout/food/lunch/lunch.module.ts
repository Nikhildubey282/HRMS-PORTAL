import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LunchRoutingModule } from './lunch-routing.module';
import { LunchComponent } from './lunch.component';
import { LunchCalendarComponent } from '../lunch-calendar/lunch-calendar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LunchCalendarModule } from '../lunch-calendar/lunch-calendar/lunch-calendar.module';
import { SelectModule } from '../select/select.module';


@NgModule({
  declarations: [
    LunchComponent,
  ],
  imports: [
    CommonModule,
    LunchRoutingModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    LunchCalendarModule,
    SelectModule
  ]
})
export class LunchModule { }
