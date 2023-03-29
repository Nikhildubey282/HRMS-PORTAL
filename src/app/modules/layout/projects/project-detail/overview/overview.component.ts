import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  tags1=['Roadmap','Project plan','User stories','Designs'];
  tags2=['Scope of Work','WireFrame','Other','Project App Links']

  dataSource = new MatTableDataSource<any>();


  heading= [
    { heading:'Name', key:'name',type:'text'},
    { heading:'Allocated As	', key:'allocate',type:'text'},
    { heading:'Department', key:'department',type:'text'},
    {heading:'Alloc Hrs	',key:'alloc_hrs',type:'text'},
    {heading:'Exp',key:'exp',type:'text'},
    {heading:'Relevant Exp	',key:'relevant_exp',type:'text'},
    {heading:'Hrs Log',key:'hrs_log',type:'text'},
  ]
  Table_DATA: any[] = [
    {name:'Nikhil Dubey',allocate:'Resource',department:'Angular',alloc_hrs:'8.00',exp:'1.0',relevant_exp:'0.7',hrs_log:'2101:46'}


  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
