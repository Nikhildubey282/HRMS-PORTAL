import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferalListRoutingModule } from './referal-list-routing.module';
import { ReferalListComponent } from './referal-list.component';


@NgModule({
  declarations: [
    ReferalListComponent
  ],
  imports: [
    CommonModule,
    ReferalListRoutingModule
  ]
})
export class ReferalListModule { }
