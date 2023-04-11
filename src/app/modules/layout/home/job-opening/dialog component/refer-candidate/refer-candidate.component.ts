import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-refer-candidate',
  templateUrl: './refer-candidate.component.html',
  styleUrls: ['./refer-candidate.component.scss']
})
export class ReferCandidateComponent implements OnInit {
total=200;
  referCandidateForm!:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private dialogRef: MatDialogRef<ReferCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    this.createform();
    console.log(this.data.name,'nikhil')
  }

  createform(){
    this.referCandidateForm=this._fb.group({
      departmentName: [{value: this.data.departmentName, disabled: true}, Validators.required],
      job_code:[{value: this.data.jobCode, disabled: true}, Validators.required],
      location:[{value: this.data.location, disabled: true}, Validators.required],
      experience:[{value: this.data.experience, disabled: true}, Validators.required],
      positiontitle:[{value:this.data.positiontitle,disabled:true},Validators.required],
      name:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^\d+$/)]],
      email:['',[Validators.required,Validators.email]],
      experienceCandidate:['',[Validators.required]]

    })

  }


  crossClick() {
    this.dialogRef.close();
  }
  get formCtrl(){
    return this.referCandidateForm.controls
  }

}
