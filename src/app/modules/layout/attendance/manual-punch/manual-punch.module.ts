import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualPunchRoutingModule } from './manual-punch-routing.module';
import { ManualPunchComponent } from './manual-punch.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ManualPunchComponent
  ],
  imports: [
    CommonModule,
    ManualPunchRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    CommontableModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ManualPunchModule { }
