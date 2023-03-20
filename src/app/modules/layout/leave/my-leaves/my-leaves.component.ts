import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.scss']
})
export class MyLeavesComponent implements OnInit {
  department='Leave Type';
  genderData=['Male','Female'];
  addButton=false;
  leaveForm!:FormGroup;

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'Action', key:'sNo',type:'text'},
    { heading: 'Leave Type', key:'mName',type:'text'},
    { heading: 'Request From', key:'lName',type:'text'},
    {heading:'Request To',key:'Name',type:'text'},
    {heading:	'Applied On',key:'rd',type:'text'},
    {heading:'Status'},
    {heading:'Level 1'},
    {heading:'Level 2'},




  ]
  Table_DATA: any[] = [

  ];


  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  createForm(){
    this.leaveForm=this._fb.group({
      leavetype:['',[Validators.required]],
      startdate:['',[Validators.required]],
      enddate:['',[Validators.required]],
      remarks:['',[Validators.required]]
    })
  }

  add(){
    console.log('nikhbjdjbjdkjnksdjndjnsjnksdjks')
    if(this.addButton===false)
    this.addButton=true;

    else{
      this.addButton=false;

    }
  }


}
