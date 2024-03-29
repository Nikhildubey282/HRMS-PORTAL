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
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { MatIconModule } from '@angular/material/icon';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';
import {MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AssetsDeclarationsComponent,
    HelpDialogComponent
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
    FormsModule,
    GetControlModule,
    ValidationErrorModule,
    MatIconModule,
    MatDialogModule
  ],
  providers:[SnackBarService]
})
export class AssetsDeclarationsModule { }
