import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './layout-parts/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ListingComponent } from './side-nav/listing/listing.component';
import { AbsoluteRoutingModule } from 'src/app/pipes/absolute-routing/absolute-routing.module';
import { CommontableModule } from '../commontable/commontable.module';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    ListingComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    AbsoluteRoutingModule,
    CommontableModule
  ]
})
export class LayoutModule { }
