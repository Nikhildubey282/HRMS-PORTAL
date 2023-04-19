import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food.component';

const routes: Routes = [
  {
    path:'',component:FoodComponent,
    children:[
      {
        path:'',redirectTo:'lunch',pathMatch:'full'

      },
      {
        path:'lunch',loadChildren:()=> import('./lunch/lunch.module').then((m) =>m.LunchModule )
      },
      {
        path:'purchase-coupons',loadChildren:()=> import('./purchase-coupons/purchase-coupons.module').then((m) =>m.PurchaseCouponsModule )
      },
      {
        path:'request-dinner',loadChildren:()=> import('./request-dinner/request-dinner.module').then((m) =>m.RequestDinnerModule )
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
