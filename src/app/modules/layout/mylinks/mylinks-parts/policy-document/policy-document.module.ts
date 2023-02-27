import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyDocumentRoutingModule } from './policy-document-routing.module';
import { PolicyDocumentComponent } from './policy-document.component';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';


@NgModule({
  declarations: [
    PolicyDocumentComponent,

  ],
  imports: [
    CommonModule,
    PolicyDocumentRoutingModule,
    CommontableModule
  ]
})
export class PolicyDocumentModule { }
