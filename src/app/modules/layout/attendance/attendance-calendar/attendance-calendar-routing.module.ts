import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtteandanceCalendarComponent } from './atteandance-calendar.component';



const routes: Routes = [
  {
    path:'',component:AtteandanceCalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceCalendarRoutingModule { }
