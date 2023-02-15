import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { JobOpeningComponent } from './job-opening/job-opening.component';
import {MatCardModule} from '@angular/material/card';
import { CouroselModule } from 'src/app/shared/courosel/courosel.module';
import { GalleryComponent } from './gallery/gallery.component';
import { MatIconModule } from '@angular/material/icon';
import { LatestAppinventivComponent } from './latest-appinventiv/latest-appinventiv.component';
import { AwardsComponent } from './latest-appinventiv/component/awards/awards.component';
import { AppreciationComponent } from './latest-appinventiv/component/appreciation/appreciation.component';
import { BirthdayComponent } from './latest-appinventiv/component/birthday/birthday.component';
import { WorkAniversaryComponent } from './latest-appinventiv/component/work-aniversary/work-aniversary.component';



@NgModule({
  declarations: [
    HomeComponent,
    NewMemberComponent,
    JobOpeningComponent,
    GalleryComponent,
    LatestAppinventivComponent,
    AwardsComponent,
    AppreciationComponent,
    BirthdayComponent,
    WorkAniversaryComponent,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    CouroselModule,
    MatIconModule
  ]
})
export class HomeModule { }
