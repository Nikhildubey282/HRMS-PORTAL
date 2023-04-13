import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilepictureRoutingModule } from './profilepicture-routing.module';
import { ProfilepictureComponent } from './profilepicture.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProfilepictureComponent
  ],
  imports: [
    CommonModule,
    ProfilepictureRoutingModule,
    MatIconModule
  ]
})
export class ProfilepictureModule { }
