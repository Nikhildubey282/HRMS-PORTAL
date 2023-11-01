import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PATTERN } from 'src/app/constant/patterns';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { requesttrainingAction } from 'src/app/shared_store/actions';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  addTrainingForm!:FormGroup;
  pattern=PATTERN;

  constructor(
    private dialogRef: MatDialogRef<AddTrainingComponent>,
    private _fb:FormBuilder,
    private store:Store,
    private snackbar:SnackBarService


  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.addTrainingForm=this._fb.group({
      trainingName:['',[Validators.required]],
      teamName:['',[Validators.required]],
      learning:['',[Validators.required,Validators.minLength(5),Validators.maxLength(200)]],
      skills:['',[Validators.required,Validators.minLength(5),Validators.maxLength(200)]],
      coduct:['']
    })
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

  submit(){
    this.store.dispatch(requesttrainingAction(this.addTrainingForm.value))
    this.dialogRef.close();
    this.snackbar.showSuccess('Training Added Successfully','')

  }

}
