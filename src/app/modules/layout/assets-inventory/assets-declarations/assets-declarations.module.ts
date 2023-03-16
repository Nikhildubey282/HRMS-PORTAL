import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsDeclarationsRoutingModule } from './assets-declarations-routing.module';
import { AssetsDeclarationsComponent } from './assets-declarations.component';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AssetsDeclarationsComponent
  ],
  imports: [
    CommonModule,
    AssetsDeclarationsRoutingModule,
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
export class AssetsDeclarationsModule { }
