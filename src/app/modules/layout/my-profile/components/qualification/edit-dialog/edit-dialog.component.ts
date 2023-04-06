import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  labelEducationLevel='Education Level';
  labelLanguage='Language';
  levelData=['1','2'];
  languageData=['Hindi','English']
  editForm!:FormGroup;


  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,
    public dialog: MatDialog,
    private _fb:FormBuilder,
    private snackbar_service:SnackBarService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    console.log(this.data,"lo");
    this.createForm();
    this.editForm.patchValue(this.data);
    // this.patch_value();
    console.log(this.editForm.value)

  }

  createForm(){
    this.editForm=this._fb.group({
      university:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      educationLevel:['',[Validators.required]],
      startdate:[''],
      // enddate:['',Validators.required],
      language:[''],
      professionalCourse:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      descripition:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]]

    })
  }

  get formCtrl(){
    return this.editForm.controls

  }
  crossClick() {
    this.dialogRef.close('cancel');
  }



  saveData(){
    if(this.editForm.valid){
    this.dialogRef.close(this.editForm.value);
    this.snackbar_service.showSuccess('Data Updated Sucessfully','')
    }
  }

}
