import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {
  department='Department';
  ticketStatus='Ticket Category';
  priority='Priority';
  genderData=['Male','Female'];
  addbutton:boolean=false;
  ticketForm!:FormGroup;


  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'Action', key:'sNo',type:'text'},
    { heading: 'Ticket Code', key:'mName',type:'text'},
    { heading: 'Priority', key:'lName',type:'text'},
    {heading:'Employee',key:'Name',type:'text'},
    {heading:	'Subject',key:'rd',type:'text'},
    {heading:'Status'},
    {heading:'Date'},



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
    this.ticketForm=this._fb.group({
      subject:['',[Validators.required]],
      department:['',Validators.required],
      ticketCategory:['',[Validators.required]],
      priority:['',[Validators.required]]

    })
  }
  get formCtrl(){
    return this.ticketForm.controls
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
