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
    {
      path:'refer-candidate',loadChildren:()=> import('./refer-candidate/refer-candidate.module').then((m) =>m.ReferCandidateModule )
    },
    {
      path:'interview',loadChildren:()=> import('./recruitment/recruitment.module').then((m) =>m.RecruitmentModule )
    },
    {
      path:'freshers',loadChildren:()=> import('./fresher/fresher.module').then((m) =>m.FresherModule )
    },
    {
      path:'training',loadChildren:()=> import('./training/training.module').then((m) =>m.TrainingModule )
    },
    {
      path:'assets-inventory',loadChildren:()=> import('./assets-inventory/assets-inventory.module').then((m) =>m.AssetsInventoryModule )
    },
    {
      path:'attendance',loadChildren:()=> import('./attendance/attendance.module').then((m) =>m.AttendanceModule )
    },
    {
      path:'leave',loadChildren:()=> import('./leave/leave.module').then((m) =>m.LeaveModule )
    },
    {
      path:'tickets',loadChildren:()=> import('./tickets/tickets.module').then((m) =>m.TicketsModule )
    },
    {
      path:'DSR',loadChildren:()=> import('./dsr/dsr.module').then((m) =>m.DSRModule )
    },

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
