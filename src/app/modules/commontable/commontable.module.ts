import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommontableRoutingModule } from './commontable-routing.module';
import { CommontableComponent } from './commontable.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    CommontableComponent
  ],
  imports: [
    CommonModule,
    CommontableRoutingModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    

  ],
  exports:[CommontableComponent]
})
export class CommontableModule { }
