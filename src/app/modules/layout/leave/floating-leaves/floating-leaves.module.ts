import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingLeavesRoutingModule } from './floating-leaves-routing.module';
import { FloatingLeavesComponent } from './floating-leaves.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';


@NgModule({
  declarations: [
    FloatingLeavesComponent
  ],
  imports: [
    CommonModule,
    FloatingLeavesRoutingModule,
    CommontableModule 
  ]
})
export class FloatingLeavesModule { }
