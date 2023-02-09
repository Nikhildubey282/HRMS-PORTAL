import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { BASICINFO,APPRASIAL, CHANGE_PASSWORD, PROFILE_PICTURE, QUALIFICATION } from 'src/app/constant/routes';

const routes: Routes = [
  {path:'',component:MyProfileComponent,

  children:[
    {
      path:'',redirectTo:BASICINFO,pathMatch:'full'
    },

    {
      path:BASICINFO,loadChildren:() => import('./components/basic-info/basic-info.module').then((m)=> m.BasicInfoModule)
    },
    {
      path:APPRASIAL,loadChildren:() => import('./components/apprasial/apprasial.module').then((m) => m.ApprasialModule)
    },
    {
      path:CHANGE_PASSWORD,loadChildren:() => import('./components/changepassword/changepassword.module').then((m)=> m.ChangepasswordModule)
    },
    {
      path:PROFILE_PICTURE,loadChildren:() => import('./components/profilepicture/profilepicture.module').then((m)=> m.ProfilepictureModule)
    },
    {
      path:QUALIFICATION,loadChildren:() => import('./components/qualification/qualification.module').then((m)=> m.QualificationModule)
    }


  ]



}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
