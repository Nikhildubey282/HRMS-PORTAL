import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailRoutingModule } from './view-detail-routing.module';
import { ViewDetailComponent } from './view-detail.component';
import { TermsComponent } from './terms/terms.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ViewDetailComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    ViewDetailRoutingModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class ViewDetailModule { }
