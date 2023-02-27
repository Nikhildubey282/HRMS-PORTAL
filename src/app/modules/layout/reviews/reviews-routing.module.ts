import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {
    path:'',component:ReviewsComponent,
    children:[
      {
        path:'',redirectTo:'my-performance',pathMatch:'full'

      },
      {
        path:'my-performance',loadChildren:()=>import('./reviews-parts/my-performance/my-performance.module').then((m)=>m.MyPerformanceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
