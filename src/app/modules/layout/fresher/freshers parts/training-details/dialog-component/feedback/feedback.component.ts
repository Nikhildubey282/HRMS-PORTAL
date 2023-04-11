import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PATTERN } from 'src/app/constant/patterns';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!:FormGroup;
  pattern=PATTERN

  constructor(
    private dialogRef: MatDialogRef<FeedbackComponent>,
    private _fb:FormBuilder,
    private notification:SnackBarService

  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }

  createForm(){
    this.feedbackForm=this._fb.group({
      goal:['',Validators.required],
      relevent:['',Validators.required],
      overall_training:['',Validators.required],
      satisfaction:['',Validators.required],
      description:['',[Validators.required,Validators.pattern(this.pattern.name)]]

    })
  }

  submit(){
    if(this.feedbackForm.valid){
      console.log(this.feedbackForm.valid,'nikhh')
    }
    else{
      this.notification.showError('Enter a required field','')

    }

  }

}
