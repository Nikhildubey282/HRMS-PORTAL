import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'Action', key:'sNo',type:'link',action:[4] },
    { heading: 'Leave Type', key:'type',type:'text'},
    { heading: 'Request From', key:'request',type:'text'},
    {heading:'Request To',key:'TO',type:'text'},
    {heading:	'Applied On',key:'applied',type:'text'},
    {heading:'Status'},
    {heading:'Level 1'},
    {heading:'Level 2'},




  ]
  Table_DATA: any[] = [
    {sNo:'React Js Training Project',type:'short leave',request:'sdjjkasjk',TO:'bmsbjbsd',applied:'bjhsjhsdjk'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
