import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-assets',
  templateUrl: './my-assets.component.html',
  styleUrls: ['./my-assets.component.scss']
})
export class MyAssetsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'Assets Name', key:'name',type:'text',sort:'true'},
    { heading: 'Assets Category', key:'category',type:'text'},
    { heading: 'Company Asset Code', key:'code',type:'text'},
    {heading:'Brand',key:'brand',type:'text'},
    {heading:	'Serial No.',key:'serialno',type:'text'},
    {heading:'Model',key:'model',type:'text'},
    {heading:'Isworking ?',key:'status',type:'text'},
    {heading:'Company',key:'company',type:'text'},
    // {heading:'Action'}

  ]
  Table_DATA: any[] = [
    {name:'LAPTOP',category:'laptop',code:'M22',brand:'HP',serialno:'178',model:'G5',status:'yes',company:'Appinventiv'},
   


  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
