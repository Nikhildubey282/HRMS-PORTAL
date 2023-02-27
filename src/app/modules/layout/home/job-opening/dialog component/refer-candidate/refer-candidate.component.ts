import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-refer-candidate',
  templateUrl: './refer-candidate.component.html',
  styleUrls: ['./refer-candidate.component.scss']
})
export class ReferCandidateComponent implements OnInit {

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
      experience:[{value: this.data.experience, disabled: true}, Validators.required]
    })

  }


  crossClick() {
    this.dialogRef.close('cancel');
  }

}
