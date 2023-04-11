import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';



// import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 1900, // 19 seconds
      progressBar: true,
      positionClass: 'toast-top-center'
    }),
    NgxMatTimepickerModule
    // SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
