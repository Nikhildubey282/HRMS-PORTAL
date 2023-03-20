import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceCalendarRoutingModule } from './attendance-calendar-routing.module';

import { AtteandanceCalendarComponent } from './atteandance-calendar.component';
// import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    AtteandanceCalendarComponent
  ],
  imports: [
    CommonModule,
    AttendanceCalendarRoutingModule,
    // FullCalendarModule
  ]
})
export class AttendanceCalendarModule { }
