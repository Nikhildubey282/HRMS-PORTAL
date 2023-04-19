import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseCouponsRoutingModule } from './purchase-coupons-routing.module';
import { PurchaseCouponsComponent } from './purchase-coupons.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { LunchCalendarComponent } from '../lunch-calendar/lunch-calendar.component';
import { LunchCalendarModule } from '../lunch-calendar/lunch-calendar/lunch-calendar.module';


@NgModule({
  declarations: [
    PurchaseCouponsComponent,
  ],
  imports: [
    CommonModule,
    PurchaseCouponsRoutingModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    LunchCalendarModule,
    MatIconModule
  ]
})
export class PurchaseCouponsModule { }
