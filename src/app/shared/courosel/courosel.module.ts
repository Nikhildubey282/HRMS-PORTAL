import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouroselRoutingModule } from './courosel-routing.module';
import { CouroselComponent } from './courosel.component';
import { NguCarouselModule } from '@ngu/carousel';



@NgModule({
  declarations: [
    CouroselComponent
  ],
  imports: [
    CommonModule,
    CouroselRoutingModule,
    NguCarouselModule
  ],
  exports:[CouroselComponent]
})
export class CouroselModule { }
