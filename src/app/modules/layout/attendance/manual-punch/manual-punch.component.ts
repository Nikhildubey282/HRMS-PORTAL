import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  heading = [
    // { heading: 'S.no', key:'sNo',type:'text'},
    // { heading: 'Employee ID', key:'mName',type:'text'},
    // { heading: 'Unique Asset Code', key:'lName',type:'text'},
    // {heading:'Serial Number',key:'Name',type:'text'},
    // {heading:	'Model Numbert',key:'rd',type:'text'},
    {heading:'Edit',},
    {heading:'Manual Punch Date'},
    {heading:'In Time'},
    {heading:'Out Time'},
    // {heading:'Images'},
    // {heading:'Is Working?'},
    // {heading:'Added'},





  ]
  Table_DATA: any[] = [

  ];

  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
