import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-floating-leaves',
  templateUrl: './floating-leaves.component.html',
  styleUrls: ['./floating-leaves.component.scss']
})
export class FloatingLeavesComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  heading = [

    {heading:'S.no',key:'sno',type:'text'},
    {heading:'Event Name',key:'eventname',type:'text'},
    {heading:'Date',key:'date',type:'text'},

  ]
  Table_DATA: any[] = [
    {sno:'1',eventname:'Janmashtami',date:'07-09-2023'},
    {sno:'2',eventname:'Eid al-Adha',date:'05-06-2023'}

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
