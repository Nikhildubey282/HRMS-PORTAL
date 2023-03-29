import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DEPARTMENTDROPDOWN, PRIORITYDROPDOWN } from 'src/app/constant/constant';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {
  department='Department';
  ticketCategory='Ticket Category';
  priority='Priority';
  priorityData=PRIORITYDROPDOWN;
  departmentData=DEPARTMENTDROPDOWN;
  addbutton:boolean=false;
  ticketForm!:FormGroup;


  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading:'Action', key:'action',type:'link',action:[1]},
    { heading:'Ticket Code', key:'ticket_code',type:'text'},
    { heading:'Priority', key:'priority',type:'text'},
    {heading:'Employee',key:'employee',type:'text'},
    {heading:'Subject',key:'subject',type:'text'},
    {heading:'Status',key:'status',type:'text'},
    {heading:'Date',key:'date',type:'text'},
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

  addTickets() {
    console.log(this.ticketForm.value,'sdfhhsdfjhsdjhjhsdjhjsdjjsd')

      this.Table_DATA.push({
        action:'',
        ticket_code: 'APP-25032023/0082',
        priority:this.formCtrl['priority'].value,
        employee:'Nikhil Dubey',
        subject:this.formCtrl['subject'].value,
        status:'Open',
        date:'25/04/2023 05:00pm',

      });
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      this.ticketForm.reset();
      // this.createForm();
  //   } else {
  //     this.qualificationForm.markAllAsTouched();
  //   }
   }

}
