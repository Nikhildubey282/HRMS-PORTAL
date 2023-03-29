import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'S.No.', key:'sNo',type:'text'},
    { heading: 'Sub-Topic', key:'subtopic',type:'text'},
    { heading: 'Topic', key:'topic',type:'text'},
    {heading:'Trainer',key:'trainer',type:'text'},
    {heading:	'Trainer Email',key:'email',type:'text'},
    {heading:'Start Date',key:'sdate',type:'text'},
    {heading:'End Date',key:'edate',type:'text'},
    {heading:'Resource URL',key:'url',type:'text'},




  ]
  Table_DATA: any[] = [
    {sNo:'1',subtopic:'What is SPADifference between SPA and MPAWhat is AngularWhy should we use it?',topic:'	Introduction',trainer:'Sandeep Gupta',email:'Sandeep.Gupta@appinventiv.com',sdate:'Feb-28-2022',edate:'Feb-28-2022',url:'-'}

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
