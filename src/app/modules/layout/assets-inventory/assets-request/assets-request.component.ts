import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-assets-request',
  templateUrl: './assets-request.component.html',
  styleUrls: ['./assets-request.component.scss']
})
export class AssetsRequestComponent implements OnInit {
  genderLabel='Assets Categories *';
  quanity='Quanity *';
  Priority='Priority *'
  genderData=['Male','Female'];
  matrialData=['Single','Married','Divoced'];
  allocation='Allocation Type *';
  addbutton:boolean=false;
  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Status', key:'mName',type:'text'},
    { heading: 'Request reason', key:'lName',type:'text'},
    {heading:'Priority',key:'Name',type:'text'},
    {heading:	'Requested At',key:'rd',type:'text'},
    {heading:'Assets Category',},
    {heading:'Allocation Type'},
    {heading:'Company'},
    // {heading:'Action'}

  ]
  Table_DATA: any[] = [

  ];


  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  add(){
    if(this.addbutton===false)
    this.addbutton=true;

    else{
      this.addbutton=false;

    }
  }



}
