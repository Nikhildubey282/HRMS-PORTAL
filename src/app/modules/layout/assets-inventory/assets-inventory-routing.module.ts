import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsInventoryComponent } from './assets-inventory.component';

const routes: Routes = [
  {
    path:'',component:AssetsInventoryComponent,
    children:[
      {
        path:'',redirectTo:'my-assets',pathMatch:'full'
      },
      {
        path:'my-assets',loadChildren:() => import('./my-assets/my-assets.module').then((m) => m.MyAssetsModule)
      },
      {
        path:'assets-request',loadChildren:() => import('./assets-request/assets-request.module').then((m) => m.AssetsRequestModule)
      },
      {
        path:'assets-declarations',loadChildren:() => import('./assets-declarations/assets-declarations.module').then((m) => m.AssetsDeclarationsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsInventoryRoutingModule { }
