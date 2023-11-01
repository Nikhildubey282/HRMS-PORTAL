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
import { HelpDialogComponent } from './layout-parts/help-dialog/help-dialog.component';
import { CovidComponent } from './layout-parts/covid/covid.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CouroselModule } from 'src/app/shared/courosel/courosel.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetControlModule } from 'src/app/pipes/get-control/get-control.module';
import { ValidationErrorModule } from 'src/app/pipes/validation-error/validation-error.module';
import { LogoutConfirmationComponent } from './layout-parts/logout-confirmation/logout-confirmation.component';
import { Store, StoreModule } from '@ngrx/store';
import { foodReducer, getReferFriendDataReducer, myPitchReducer, profileReducer, requestTrainingReducer } from 'src/app/shared_store/reducer';
import { FOOD, GET_REFER_FRIEND, IMAGE, MY_PITCH, REQUEST_FOR_TRAINING } from 'src/app/shared_store/selector';




@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    ListingComponent,
    HelpDialogComponent,
    CovidComponent,
    LogoutConfirmationComponent
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
    CommontableModule,
    MatFormFieldModule,
    MatInputModule,
    CouroselModule,
    FormsModule,
    ReactiveFormsModule,
    GetControlModule,
    ValidationErrorModule,
    StoreModule.forFeature(GET_REFER_FRIEND,getReferFriendDataReducer),
    StoreModule.forFeature(REQUEST_FOR_TRAINING,requestTrainingReducer),
    StoreModule.forFeature(MY_PITCH,myPitchReducer),
    StoreModule.forFeature(FOOD,foodReducer),
    StoreModule.forFeature(IMAGE,profileReducer),



  ],


})
export class LayoutModule { }
