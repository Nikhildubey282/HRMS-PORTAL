import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss']
})
export class MyDsrComponent implements OnInit {
  addbutton=false;
  lableProject='Project';
  projectData=['Training Project React JS','Miscellaneous','Interview'];
  labelStatus='Final Approved Status';
  statusData=['pending','rejected','approved'];
  labelHours='Hours';
  hoursData=['hours','less than 5 hours'];
  labelsubmission='Submission Status';
  labelProject='Project';
  dsrForm!:FormGroup;

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'Sr.No.', key:'sNo',type:'text'},
    { heading: 'Emp Name.', key:'mName',type:'text'},
    { heading: 'Emp ID', key:'lName',type:'text'},
    {heading:'Email'},
    {heading:'Employment Type',key:'Name',type:'text'},
    {heading:	'Date',key:'rd',type:'text'},
    {heading:'Total (Logged Hr)'},
    {heading:'Final Approved'},



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
    this.dsrForm=this._fb.group({
      project:['',[Validators.required]],
      date:['',[Validators.required]],
      hours:['',[Validators.required]]

    })
  }

  add(){
    console.log('nikhbjdjbjdkjnksdjndjnsjnksdjks')
    if(this.addbutton===false)
    this.addbutton=true;

    else{
      this.addbutton=false;

    }
  }

}
