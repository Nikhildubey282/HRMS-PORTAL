import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import{LOGIN,FORGOT_PASSWORD} from '../../constant/routes'

const routes: Routes = [
 { path: '',
 component: AccountComponent,

 children:[
  {
    path:'',redirectTo:LOGIN,pathMatch:'full'
  },
  {
    path:LOGIN,loadChildren:() => import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path:FORGOT_PASSWORD,loadChildren:() => import('./pages/forget-password/forget-password.module').then((m) => m.ForgetPasswordModule)
  }


 ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
