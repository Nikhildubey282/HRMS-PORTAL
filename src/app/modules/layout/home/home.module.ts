import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { JobOpeningComponent } from './job-opening/job-opening.component';
import { ReferalComponent } from './referal/referal.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    HomeComponent,
    NewMemberComponent,
    JobOpeningComponent,
    ReferalComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ]
})
export class HomeModule { }
