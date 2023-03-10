import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACCOUNT,LAYOUT } from './constant/routes';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  { path: '', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
  {path: LAYOUT, loadChildren:() => import('./modules/layout/layout.module').then(m => m.LayoutModule) },
  {path:'**', loadChildren:() => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule )  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
