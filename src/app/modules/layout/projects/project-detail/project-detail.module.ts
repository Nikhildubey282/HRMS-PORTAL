import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OverviewComponent } from './overview/overview.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonDocumentsComponent } from './common-documents/common-documents.component';
import { NotesComponent } from './notes/notes.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DsrReportComponent } from './dsr-report/dsr-report.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';



@NgModule({
  declarations: [
    ProjectDetailComponent,
    OverviewComponent,
    CommonDocumentsComponent,
    NotesComponent,
    DsrReportComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    MatTabsModule,
    CommontableModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DropdownModule

  ]
})
export class ProjectDetailModule { }
