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
    { heading: 'Project Name', key:'sNo',type:'link',action:[4] },
    { heading: 'Billing Type', key:'type',type:'text'},
    { heading: 'Resources', key:'resources',type:'text'},
    {heading:'Hrs.',key:'hrs',type:'text'},
    {heading:	'Total Milestone',key:'milestone',type:'text'},
    {heading:'Delivered',type:'text',key:'delivered'},
    {heading:'Pending',type:'text',key:'pending'},
    {heading:'% Complete',type:'text',key:'complete'},
  ]
  Table_DATA: any[] = [
    {sNo:'React Js Training Project',type:'',resources:'3',hrs:'1872498',milestone:'1',delivered:'0',pending:'1',complete:'0 %'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
