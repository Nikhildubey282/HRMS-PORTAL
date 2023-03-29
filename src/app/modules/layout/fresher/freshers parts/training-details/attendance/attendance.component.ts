import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'S.No.', key:'sNo',type:'text'},
    { heading: 'Topic', key:'topic',type:'text'},
    { heading: 'Date', key:'date',type:'text'},
    {heading:'Attendance',key:'attendance',type:'text'},
  ]
  Table_DATA: any[] = [
    {sNo:'1',topic:'Introduction',date:'Feb-28-2022',attendance:'Present'},
    {sNo:'2',topic:'Basic building block',date:'Feb-28-2022',attendance:'Present'},
    {sNo:'3',topic:'Components',date:'Feb-28-2022',attendance:'Present'}

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
