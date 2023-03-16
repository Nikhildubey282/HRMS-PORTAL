import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-assets-declarations',
  templateUrl: './assets-declarations.component.html',
  styleUrls: ['./assets-declarations.component.scss']
})
export class AssetsDeclarationsComponent implements OnInit {
  os='OS';
  genderData=['Male','Female'];
  matrialData=['Single','Married','Divoced'];
  allocation='Device is in working condition ?';
  addbutton:boolean=false;
  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Employee ID', key:'mName',type:'text'},
    { heading: 'Unique Asset Code', key:'lName',type:'text'},
    {heading:'Serial Number',key:'Name',type:'text'},
    {heading:	'Model Numbert',key:'rd',type:'text'},
    {heading:'OS',},
    {heading:'OS version'},
    {heading:'Brand'},
    {heading:'Colour'},
    {heading:'Images'},
    {heading:'Is Working?'},
    {heading:'Added'},





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
