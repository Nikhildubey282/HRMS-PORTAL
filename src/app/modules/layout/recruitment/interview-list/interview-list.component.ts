import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  departmentLabel='Department';
  statusLabel='Status';
  departmentData=['Angular','React','Blockchain','Node JS','Andorid'];
  statusData=['Selected','Rejected','Missed','In Progess'];

  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Department', key: 'fName', type: 'link', link: '/dashboard/client-details' },
    { heading: 'Name', key:'mName',type:'text'},
    { heading: 'Email', key:'lName',type:'text'},
    {heading:'Mobile No.',key:'Name',type:'text'},
    {heading:'Round Type',key:'rd',type:'text'},
    {heading:'Interview Date',},
    {heading:'Interview Time'},
    {heading:'Final Status'},
    {heading:'Action'}

  ]
  Table_DATA: any[] = [

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
