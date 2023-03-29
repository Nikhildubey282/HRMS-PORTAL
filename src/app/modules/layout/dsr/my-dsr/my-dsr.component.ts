import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

    this.createForm();
  }

  createForm(){
    this.dsrForm=this._fb.group({
      project:['',[Validators.required]],
      date:['',[Validators.required]],
      hours:['',[Validators.required]],
      dsr:['',[Validators.required]]

    })
  }

  get formCtrl(){
    return this.dsrForm.controls
  }

  add(){
    console.log('nikhbjdjbjdkjnksdjndjnsjnksdjks')
    if(this.addbutton===false)
    this.addbutton=true;

    else{
      this.addbutton=false;

    }
  }

  showSuccess() {
    this.toastrService.success('DSR Add Successfully!');
  }

  submitHandler() {

    console.log(this.dsrForm.value,'sdfhhsdfjhsdjhjhsdjhjsdjjsd')

      this.Table_DATA.push({
        sNo:this.Table_DATA.length+1,
        emp_name: 'Nikhil Dubey',
        emp_id:'AI1612',
        email:'nikhildubey282@gmail.com',
        emp_type:'Permanmnet',
        // date: new Date().toISOString().slice(0, 10),
        date:this.formCtrl['date'].value,
        logged_hr:'8:30',
        final_approved:''
      });
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.showSuccess();

      // this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
      //   this.Table_DATA
      // );
      // this.resetForm();
      // this.createForm();
  //   } else {
  //     this.qualificationForm.markAllAsTouched();
  //   }
   }

}
