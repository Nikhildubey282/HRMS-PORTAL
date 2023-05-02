import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPitchRoutingModule } from './my-pitch-routing.module';
import { MyPitchComponent } from './my-pitch.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';


@NgModule({
  declarations: [
    MyPitchComponent
  ],
  imports: [
    CommonModule,
    MyPitchRoutingModule,
    CommontableModule
  ]
})
export class MyPitchModule { }
