import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRequestRoutingModule } from './assets-request-routing.module';
import { AssetsRequestComponent } from './assets-request.component';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AssetsRequestComponent
  ],
  imports: [
    CommonModule,
    AssetsRequestRoutingModule,
    DropdownModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    CommontableModule,
    ReactiveFormsModule,
    FormsModule



  ]
})
export class AssetsRequestModule { }