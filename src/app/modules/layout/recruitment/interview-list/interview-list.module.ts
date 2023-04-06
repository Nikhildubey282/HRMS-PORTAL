import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewListRoutingModule } from './interview-list-routing.module';
import { InterviewListComponent } from './interview-list.component';
import {MatSelectModule} from '@angular/material/select';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { DropdownModule } from 'src/app/shared/dropdown/dropdown.module';




@NgModule({
  declarations: [
    InterviewListComponent
  ],
  imports: [
    CommonModule,
    InterviewListRoutingModule,
    MatSelectModule,
    CommontableModule,
    DropdownModule
  ]
})
export class InterviewListModule { }
