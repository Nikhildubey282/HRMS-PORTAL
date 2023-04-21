import { DatePipe } from '@angular/common';
import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { SnackBarService } from 'src/app/services/snack-bar.service';

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
  statusData=['Pending','Rejected','Approved'];
  labelHours='Hours';
  hoursData=['Hours','less than 5 hours','More than 5 hours'];
  labelsubmission='Submission Status';
  labelProject='Project';
  dsrForm!:FormGroup;
  filterForm!:FormGroup;
  maxDate:Date
  @Input() ngxMatTimepicker:any;
  @ViewChild(FormGroupDirective) FormGroupDirective:FormGroupDirective;

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: 'Sr.No.', key:'sNo',type:'text'},
    { heading: 'Emp Name.', key:'emp_name',type:'text'},
    { heading: 'Emp ID', key:'emp_id',type:'text'},
    {heading:'Email',key:'email',type:'text'},
    {heading:'Employment Type',key:'emp_type',type:'text'},
    {heading:	'Date',key:'date',type:'text'},
    {heading:'Total (Logged Hr)',key:'logged_hr',type:'text'},
    {heading:'Final Approved',key:'final_approved',type:'link',action:[2]},
  ]
  Table_DATA: any[] = [

  ];


  constructor(
    private _fb:FormBuilder,
    private snackbar_service:SnackBarService,
    private datepipe:DatePipe
  ) {
    this.maxDate=new Date();
   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

    this.createForm();
    this.filterForm=this._fb.group({
      startDate:[''],
      toDate:[''],
      submissionStatus:[''],
      project1:[''],
      finalStatus:[''],
      hours1:['']
    })
  }

  createForm(){
    this.dsrForm=this._fb.group({
      project:['',[Validators.required]],
      date:['',[Validators.required]],
      hours:['',[Validators.required]],
      dsr:['',[Validators.required]],

    })
  }

  get formCtrl(){
    return this.dsrForm.controls
  }

  toggle(e:any){
    console.log(e);
    if(e.checked===true){
      this.dsrForm.controls.hours.setValue('00:00');
      this.formCtrl.dsr.setValue('Today no work has been done on this project');
    }
    else{
      this.dsrForm.controls.hours.setValue('');
      this.formCtrl.dsr.setValue('');
    }
  }

  submitHandler() {
    console.log(this.dsrForm.valid,'sdfhhsdfjhsdjhjhsdjhjsdjjsd');
    if(this.dsrForm.valid){
      this.Table_DATA.push({
        sNo:this.Table_DATA.length+1,
        emp_name: 'Nikhil Dubey',
        emp_id:'AI1612',
        email:'nikhildubey282@gmail.com',
        emp_type:'Permanmnet',
        // date: new Date().toISOString().slice(0, 10),
        date:this.datepipe.transform(this.formCtrl['date'].value,'dd-MM-YYYY'),
        logged_hr:this.formCtrl.hours.value,
        final_approved:''
      });
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.FormGroupDirective.resetForm();
    this.snackbar_service.showSuccess('DSR add Successfully','');
    }
    else{
      this.dsrForm.markAllAsTouched();
    }
   }

}
function input() {
  throw new Error('Function not implemented.');
}

