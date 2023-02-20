import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIRECTORY } from 'src/app/constant/routes';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {path:'',component:LayoutComponent,

  children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {
      path:'dashboard',loadChildren:() => import('./home/home.module').then((m) => m.HomeModule)
    },
    {
      path:'profile',loadChildren:() => import('./my-profile/my-profile.module').then((m) => m.MyProfileModule)
    },
    {
      path:DIRECTORY,loadChildren:() => import('./directory/directory.module').then((m)=> m.DirectoryModule )
    }

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }