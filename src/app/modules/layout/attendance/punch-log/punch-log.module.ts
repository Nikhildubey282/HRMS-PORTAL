import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PunchLogRoutingModule } from './punch-log-routing.module';
import { PunchLogComponent } from './punch-log.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PunchLogComponent
  ],
  imports: [
    CommonModule,
    PunchLogRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    CommontableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ]
})
export class PunchLogModule { }
