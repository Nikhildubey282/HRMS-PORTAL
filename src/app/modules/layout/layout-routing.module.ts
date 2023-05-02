import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASSETSINVENTORY, ATTENDANCE, DIRECTORY, DSR, FRESHERS, HOME, INTERVIEW, LEAVE, PROFILE, PROJECTS, REFERCANDIDATE, REVIEWS, TICKETS, TRAINING } from 'src/app/constant/routes';
import { ENTERPRENEUR } from 'src/app/constant/routes';
import { LayoutComponent } from './layout.component';



const routes: Routes = [
  {path:'',component:LayoutComponent,

  children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {
      path:HOME,loadChildren:() => import('./home/home.module').then((m) => m.HomeModule)
    },
    {
      path:PROFILE,loadChildren:() => import('./my-profile/my-profile.module').then((m) => m.MyProfileModule)
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
      path:'my-pitch',loadChildren:() => import('./enterpreneur/share-ideas/my-pitch/my-pitch.module').then((m)=>m.MyPitchModule)
    },
    {
      path:'',loadChildren:()=> import('./mylinks/mylinks.module').then((m) =>m.MylinksModule )
    },
    {
      path:REVIEWS,loadChildren:()=> import('./reviews/reviews.module').then((m) =>m.ReviewsModule )
    },
    {
      path:REFERCANDIDATE,loadChildren:()=> import('./refer-candidate/refer-candidate.module').then((m) =>m.ReferCandidateModule )
    },
    {
      path:INTERVIEW,loadChildren:()=> import('./recruitment/recruitment.module').then((m) =>m.RecruitmentModule )
    },
    {
      path:FRESHERS,loadChildren:()=> import('./fresher/fresher.module').then((m) =>m.FresherModule )
    },
    {
      path:TRAINING,loadChildren:()=> import('./training/training.module').then((m) =>m.TrainingModule )
    },
    {
      path:ASSETSINVENTORY,loadChildren:()=> import('./assets-inventory/assets-inventory.module').then((m) =>m.AssetsInventoryModule )
    },
    {
      path:ATTENDANCE,loadChildren:()=> import('./attendance/attendance.module').then((m) =>m.AttendanceModule )
    },
    {
      path:LEAVE,loadChildren:()=> import('./leave/leave.module').then((m) =>m.LeaveModule )
    },
    {
      path:TICKETS,loadChildren:()=> import('./tickets/tickets.module').then((m) =>m.TicketsModule )
    },
    {
      path:DSR,loadChildren:()=> import('./dsr/dsr.module').then((m) =>m.DSRModule )
    },
    {
      path:PROJECTS,loadChildren:()=> import('./projects/projects.module').then((m) =>m.ProjectsModule )
    },
    {
      path:'project-detail',loadChildren:()=> import('./projects/project-detail/project-detail.module').then((m) =>m.ProjectDetailModule )
    },
    {
      path:'food',loadChildren:()=> import('./food/food.module').then((m) =>m.FoodModule )
    },

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
