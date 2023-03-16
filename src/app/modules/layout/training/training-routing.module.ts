import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';
import { ONGOINGTRAINING, UPCOMINGTRAINING } from 'src/app/constant/routes';


const routes: Routes = [
  {
    path:'',component:TrainingComponent,
    children:[
      {
        path:'',redirectTo:'upcoming-training',pathMatch:'full'

      },
      {
        path:'upcoming-training',loadChildren:() => import('./training-parts/upcoming-training/upcoming-training.module').then((m) => m.UpcomingTrainingModule)
      },
      {
        path:'trainingdetails/:id',loadChildren:() => import('./training-parts/details-training/details-training.module').then((m) => m.DetailsTrainingModule)
      },
      {
        path:ONGOINGTRAINING,loadChildren:() => import('./training-parts/ongoing-training/ongoing-training.module').then((m) => m.OngoingTrainingModule)
      },
      {
        path:'my-training',loadChildren:() => import('./training-parts/department-training/department-training.module').then((m) => m.DepartmentTrainingModule)
      },
      {
        path:'requested-training',loadChildren:() => import('./training-parts/requested-training/requested-training.module').then((m) => m.RequestedTrainingModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
