import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilepictureRoutingModule } from './profilepicture-routing.module';
import { ProfilepictureComponent } from './profilepicture.component';


@NgModule({
  declarations: [
    ProfilepictureComponent
  ],
  imports: [
    CommonModule,
    ProfilepictureRoutingModule
  ]
})
export class ProfilepictureModule { }
