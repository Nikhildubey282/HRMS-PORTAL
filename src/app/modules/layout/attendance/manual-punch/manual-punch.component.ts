import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {

  companyLabel='Company';
  companyData=['Appinventiv',];

  dataSource = new MatTableDataSource<any>();

  heading = [
    {heading:'Edit',},
    {heading:'Manual Punch Date'},
    {heading:'In Time'},
    {heading:'Out Time'}
  ]
  Table_DATA: any[] = [

  ];

  constructor() { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
