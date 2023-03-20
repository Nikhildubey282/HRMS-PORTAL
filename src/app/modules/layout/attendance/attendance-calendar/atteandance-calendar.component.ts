import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-atteandance-calendar',
  templateUrl: './atteandance-calendar.component.html',
  styleUrls: ['./atteandance-calendar.component.scss']
})
export class AtteandanceCalendarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   plugins: [dayGridPlugin],
  //   // weekends: false,
  //   // events: [
  //   //   { title: 'Meeting', start: new Date() }
  //   // ]
  // };

}
