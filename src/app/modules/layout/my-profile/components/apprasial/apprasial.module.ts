import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprasialRoutingModule } from './apprasial-routing.module';
import { ApprasialComponent } from './apprasial.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommontableModule } from 'src/app/modules/commontable/commontable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CommontableModule_1 as CommontableModule } from "../../../../commontable/commontable.module";




@NgModule({
    declarations: [
        ApprasialComponent
    ],
    imports: [
        CommonModule,
        ApprasialRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        CommontableModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ApprasialModule { }
