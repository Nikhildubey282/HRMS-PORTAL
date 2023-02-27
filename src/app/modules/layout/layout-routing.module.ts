import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIRECTORY } from 'src/app/constant/routes';
import { ENTERPRENEUR } from 'src/app/constant/routes';
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
    },
    {
      path:ENTERPRENEUR,loadChildren:() => import('./enterpreneur/enterpreneur.module').then((m)=>m.EnterpreneurModule)
    },
    {
      path:'add_pitch',loadChildren:() => import('./enterpreneur/share-ideas/shareideas/shareideas.module').then((m)=>m.ShareideasModule)
    },
    {
      path:'',loadChildren:()=> import('./mylinks/mylinks.module').then((m) =>m.MylinksModule )
    },
    {
      path:'reviews',loadChildren:()=> import('./reviews/reviews.module').then((m) =>m.ReviewsModule )
    },

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
