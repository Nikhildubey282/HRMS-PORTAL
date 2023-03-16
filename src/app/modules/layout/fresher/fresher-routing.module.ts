import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FresherComponent } from './fresher.component';
import { MYTRAINING } from 'src/app/constant/routes';

const routes: Routes = [
  {
    path:'',component:FresherComponent,
    children:[
      {
        path:MYTRAINING,loadChildren:() => import('./freshers parts/mytraining/mytraining.module').then((m) => m.MytrainingModule)
      },
      {
        path:'training-details/:id',loadChildren:() => import('./freshers parts/training-details/training-details.module').then((m) => m.TrainingDetailsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FresherRoutingModule { }
