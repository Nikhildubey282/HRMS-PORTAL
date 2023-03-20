import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {


  dataSource = new MatTableDataSource<any>();
  punchLogForm!:FormGroup;

  heading = [
    // { heading: 'S.no', key:'sNo',type:'text'},
    // { heading: 'Employee ID', key:'mName',type:'text'},
    // { heading: 'Unique Asset Code', key:'lName',type:'text'},
    // {heading:'Serial Number',key:'Name',type:'text'},
    // {heading:	'Model Numbert',key:'rd',type:'text'},
    {heading:'Name',},
    {heading:'Punch Time'},
    {heading:'Direction'},
    // {heading:'Images'},
    // {heading:'Is Working?'},
    // {heading:'Added'},





  ]
  Table_DATA: any[] = [

  ];

  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();
  }

  createForm(){
    this.punchLogForm=this._fb.group({
      date:['',Validators.required],
      employee:['',Validators.required]
    })
  }

}
