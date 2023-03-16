import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-requested-training',
  templateUrl: './requested-training.component.html',
  styleUrls: ['./requested-training.component.scss']
})
export class RequestedTrainingComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Training Name', key:'mName',type:'text'},
    { heading: 'Timeline to conduct', key:'lName',type:'text'},
    {heading:'Requested date.',key:'Name',type:'text'},
    {heading:	'Status',key:'rd',type:'text'},
    {heading:'Action',},
    // {heading:'Interview Time'},
    // {heading:'Final Status'},
    // {heading:'Action'}

  ]
  Table_DATA: any[] = [

  ];

  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
