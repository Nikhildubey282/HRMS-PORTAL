import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ABS_LEAVEDETAIL } from 'src/app/constant/absolute-route';
import { PATTERN } from 'src/app/constant/patterns';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { LogoutConfirmationComponent } from '../../layout-parts/logout-confirmation/logout-confirmation.component';
import { RevokedLeaveComponent } from './revoked-leave/revoked-leave.component';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.scss']
})
export class MyLeavesComponent implements OnInit {
  department='Leave Type';
  genderData=['Planned Leave','Short Leave'];
  addButton=false;
  leaveForm!:FormGroup;
  leavedetail=ABS_LEAVEDETAIL;
  dataSource = new MatTableDataSource<any>();
  @ViewChild(FormGroupDirective) formGroupDirective:FormGroupDirective;
  checked:any;
  pattern=PATTERN;
  minDate:Date;
  maxDate:Date;


  heading = [
    { heading: 'Action', key:'sNo',type:'link',action:[1,5] },
    { heading: 'Leave Type', key:'leavetype',type:'text'},
    { heading: 'Request From', key:'startdate',type:'text'},
    {heading:'Request To',key:'enddate',type:'text'},
    {heading:	'Applied On',key:'applied',type:'text'},
    {heading:'Status',key:'status',type:'text'},
    {heading:'Level 1',key:'level_1',type:'text'},
    {heading:'Level 2',key:'level_2',type:'text'},
  ]
  Table_DATA: any[] = [
  ];

  constructor(private _fb:FormBuilder, private datepipe:DatePipe,private notificationService:SnackBarService,private dialog:MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date();
   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();

  }

  createForm(){
    this.leaveForm=this._fb.group({
      leavetype:['',[Validators.required]],
      startdate:['',[Validators.required]],
      enddate:['',[Validators.required]],
      remarks:['',[Validators.required,Validators.pattern(this.pattern.name),Validators.minLength(5),Validators.maxLength(20)]]
    })
  }

  get formCtrl(){
    return this.leaveForm.controls
  }

  add(){
    console.log('nikhbjdjbjdkjnksdjndjnsjnksdjks')
    if(this.addButton===false)
    this.addButton=true;
    else{
      this.addButton=false;
    }
    // this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

  toogle(e:any){
    this.checked=e.checked;
    console.log(this.checked);

  }

  sumbit(){
    if(this.leaveForm.valid){
    this.Table_DATA.push({
      id:Math.random(),
      sNo:'/layout/leave/leave-details',
      leavetype:this.leaveForm.controls['leavetype'].value,
      startdate:this.datepipe.transform(this.leaveForm.controls['startdate'].value,'dd-MM-YYYY'),
      enddate:this.datepipe.transform(this.leaveForm.controls['enddate'].value,'dd-MM-YYYY'),
    applied:this.datepipe.transform(this.leaveForm.controls['startdate'].value,'dd-MM-YYYY'),
      status:'Pending',
      level_1:'Suyash Saxena',
      level_2:'HR'
    })
    this.formGroupDirective.resetForm();
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.notificationService.showSuccess('Leave added Sucessfully','')
    this.addButton=false
  }
  else{
    this.leaveForm.markAllAsTouched();
  }
  }

  leaveRevoked(e:any){
    console.log(e);
    const dialogRef = this.dialog.open(RevokedLeaveComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log("this is dialog response>>>>>>",res);
      if(res===true){
        this.Table_DATA=this.Table_DATA.filter(value=>{

          if(value.id!=e.id){
            return value
          }
        }
        );
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
      }

    });

  }


}
