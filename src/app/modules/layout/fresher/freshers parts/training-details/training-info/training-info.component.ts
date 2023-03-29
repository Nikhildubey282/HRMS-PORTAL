import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-training-info',
  templateUrl: './training-info.component.html',
  styleUrls: ['./training-info.component.scss']
})
export class TrainingInfoComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'S.No.', key:'sNo',type:'text'},
    // { heading: 'Sub-Topic', key:'subtopic',type:'text'},
    { heading: 'Topic', key:'topic',type:'text'},
    {heading:'Trainer',key:'trainer',type:'text'},
    {heading:	'Trainer Email',key:'email',type:'text'},
    {heading:'Start Date',key:'sdate',type:'text'},
    {heading:'End Date',key:'edate',type:'text'},
    {heading:'Resource URL',key:'url',type:'text'},



  ]
  Table_DATA: any[] = [
    {sNo:'1',topic:'Introduction',trainer:'Sandeep Gupta',email:'Sandeep.Gupta@appinventiv.com',sdate:'Feb-28-2022',edate:'Feb-28-2022',url:'-'},
    {sNo:'2',topic:'Basic building block	',trainer:'Sandeep Gupta',email:'Sandeep.Gupta@appinventiv.com',sdate:'Mar-01-2022',edate:'Mar-01-2022',url:'-'}




  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
