import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommontableRoutingModule } from './commontable-routing.module';
import { CommontableComponent } from './commontable.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CommontableComponent
  ],
  imports: [
    CommonModule,
    CommontableRoutingModule,
    MatTableModule
  ]
})
export class CommontableModule { }
