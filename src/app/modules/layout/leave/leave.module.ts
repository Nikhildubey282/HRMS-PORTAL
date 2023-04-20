import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './leave.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    LeaveComponent
  ],
  imports: [
    CommonModule,
    LeaveRoutingModule,
    MatDialogModule
  ]
})
export class LeaveModule { }
