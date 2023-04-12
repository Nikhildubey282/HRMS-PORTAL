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
import {MatDialogModule} from '@angular/material/dialog';
import { ReferCandidateComponent } from './job-opening/dialog component/refer-candidate/refer-candidate.component';
import { GallerydialogComponent } from './gallery/dialog component/gallerydialog/gallerydialog.component';
import { DialogComponent } from './latest-appinventiv/component/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';





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
    ReferCandidateComponent,
    GallerydialogComponent,
    DialogComponent,



  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    CouroselModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    GetControlModule,
    ValidationErrorModule
  ],
  exports:[ReferCandidateComponent]
})
export class HomeModule { }
