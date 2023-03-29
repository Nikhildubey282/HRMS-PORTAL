import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ABS_LEAVEDETAIL } from 'src/app/constant/absolute-route';

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
  leavedetail=ABS_LEAVEDETAIL;

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'Action', key:'sNo',type:'link',action:[1] },
    { heading: 'Leave Type', key:'type',type:'text'},
    { heading: 'Request From', key:'request',type:'text'},
    {heading:'Request To',key:'TO',type:'text'},
    {heading:	'Applied On',key:'applied',type:'text'},
    {heading:'Status'},
    {heading:'Level 1'},
    {heading:'Level 2'},




  ]
  Table_DATA: any[] = [
    {sNo:this.leavedetail,type:'short leave',request:'sdjjkasjk',TO:'bmsbjbsd',applied:'bjhsjhsdjk'},
    {sNo:this.leavedetail,type:'nikhil',request:'manu',TO:'govind',applied:'bjhsjhsdjk'},



  ];


  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();

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
