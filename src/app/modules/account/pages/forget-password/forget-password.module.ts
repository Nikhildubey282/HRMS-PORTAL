import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';


@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    AbsoluteRoutingModule
  ]
})
export class ForgetPasswordModule { }
