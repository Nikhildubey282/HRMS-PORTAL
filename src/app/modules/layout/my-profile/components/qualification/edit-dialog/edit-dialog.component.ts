import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { PATTERN } from 'src/app/constant/patterns';


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
  Pattern=PATTERN;




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
      university:['',[Validators.required,Validators.pattern(this.Pattern.name)]],
      educationLevel:['',[Validators.required]],
      date:['',[Validators.required]],
      language:[''],
      professionalCourse:['',[Validators.required,Validators.pattern(this.Pattern.name)]],
      descripition:['',[Validators.required,Validators.pattern(this.Pattern.name)]]

    })
  }

  get formCtrl(){
    return this.editForm.controls

  }
  crossClick() {
    this.dialogRef.close();
  }



  saveData(){
    if(this.editForm.valid){
    this.dialogRef.close(this.editForm.value);
    this.snackbar_service.showSuccess('Data Updated Sucessfully','')
    }
  }

}
