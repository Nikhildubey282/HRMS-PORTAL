import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseCouponsComponent } from './purchase-coupons.component';

const routes: Routes = [
  {
    path:'',component:PurchaseCouponsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseCouponsRoutingModule { }
