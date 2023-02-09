import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepictureComponent } from './profilepicture.component';

const routes: Routes = [
  {
    path:'',component:ProfilepictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilepictureRoutingModule { }
