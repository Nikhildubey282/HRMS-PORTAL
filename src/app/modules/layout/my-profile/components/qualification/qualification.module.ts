import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualificationRoutingModule } from './qualification-routing.module';
import { QualificationComponent } from './qualification.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';




@NgModule({
  declarations: [
    QualificationComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  providers:[SnackBarService],
  imports: [
    CommonModule,
    QualificationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    CommontableModule,
    DropdownModule,
    MatDialogModule,
    GetControlModule,
    ValidationErrorModule
  ]
})
export class QualificationModule { }
