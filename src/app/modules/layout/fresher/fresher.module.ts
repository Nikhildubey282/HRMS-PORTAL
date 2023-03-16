import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FresherRoutingModule } from './fresher-routing.module';
import { FresherComponent } from './fresher.component';


@NgModule({
  declarations: [
    FresherComponent
  ],
  imports: [
    CommonModule,
    FresherRoutingModule
  ]
})
export class FresherModule { }
