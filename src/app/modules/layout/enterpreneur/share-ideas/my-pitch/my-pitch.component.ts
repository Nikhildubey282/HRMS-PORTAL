import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ABS_MYPITCH } from 'src/app/constant/absolute-route';

@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss']
})
export class MyPitchComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  


  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Title', key:'status',type:'text'},
    { heading: 'Industry', key:'requestreason',type:'text'},
    {heading:'Technical / Non-Technical',key:'priority',type:'text'},
    {heading:	'Submitted On',key:'date',type:'text'},
    {heading:'Action',key:'category',type:'text'},
  ]
  Table_DATA: any[] = [

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
