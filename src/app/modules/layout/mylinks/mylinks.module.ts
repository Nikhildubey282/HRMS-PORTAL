import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MylinksRoutingModule } from './mylinks-routing.module';
import { MylinksComponent } from './mylinks.component';


@NgModule({
  declarations: [
    MylinksComponent
  ],
  imports: [
    CommonModule,
    MylinksRoutingModule
  ]
})
export class MylinksModule { }
