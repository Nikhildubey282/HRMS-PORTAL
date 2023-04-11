import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-punch-log',
  templateUrl: './punch-log.component.html',
  styleUrls: ['./punch-log.component.scss']
})
export class PunchLogComponent implements OnInit {

companyLabel='Company';
data=['Appinventiv Technology'];
  dataSource = new MatTableDataSource<any>();
  punchLogForm!:FormGroup;

  heading = [
    {heading:'Name',},
    {heading:'Punch Time'},
    {heading:'Direction'},
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
      Company:['',Validators.required]
    })
  }

}
