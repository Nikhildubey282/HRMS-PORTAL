import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { slideAnimation } from 'src/animation';


@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss'],
  animations:[slideAnimation]
})
export class ShiftComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'Date of joining ', key:'mName',type:'text'},
    { heading: 'Office shift', key:'lName',type:'text'},
  ]
  Table_DATA: any[] = [
    {'mName':'feb-07-2022','lName':'Morning Shift'}

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
