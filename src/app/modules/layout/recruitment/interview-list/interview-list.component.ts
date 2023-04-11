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
    { heading: 'Department', key: 'department', type: 'text' },
    { heading: 'Name', key:'name',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    {heading:'Mobile No.',key:'mobile',type:'text'},
    {heading:'Round Type',key:'roundtype',type:'text'},
    {heading:'Interview Date',type:'text',key:'interviewdate'},
    {heading:'Interview Time',type:'text',key:'interviewtime'},
    {heading:'Final Status',type:'text',key:'status'},
    {heading:'Action',type:'text'}

  ]
  Table_DATA: any[] = [
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'1',department:'angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Selected',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},








  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
