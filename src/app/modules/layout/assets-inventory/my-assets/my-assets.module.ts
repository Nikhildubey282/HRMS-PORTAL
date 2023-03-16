import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsRoutingModule } from './my-assets-routing.module';
import { MyAssetsComponent } from './my-assets.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';


@NgModule({
  declarations: [
    MyAssetsComponent
  ],
  imports: [
    CommonModule,
    MyAssetsRoutingModule,
    CommontableModule
  ]
})
export class MyAssetsModule { }
