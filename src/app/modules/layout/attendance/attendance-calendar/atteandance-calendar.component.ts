import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';



@Component({
  selector: 'app-atteandance-calendar',
  templateUrl: './atteandance-calendar.component.html',
  styleUrls: ['./atteandance-calendar.component.scss']
})
export class AtteandanceCalendarComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    weekends: true,
    events: [
      {
        daysOfWeek: [0,6], //Sundays and saturdays
        rendering:"background",
        color: "#ff9f89",
        // overLap: false,
        // allDay: true
      },
      { title: 'Meeting', start: new Date() }
    ]
  }


}
