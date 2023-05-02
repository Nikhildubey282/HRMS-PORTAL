import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-revoked-leave',
  templateUrl: './revoked-leave.component.html',
  styleUrls: ['./revoked-leave.component.scss']
})
export class RevokedLeaveComponent implements OnInit {
  reasonForm!:FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RevokedLeaveComponent>,
    private snackbar:SnackBarService,
    private _fb:FormBuilder

  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.reasonForm=this._fb.group({
      Reason:['',[Validators.required]]
    })
  }

  confirm(){
    if(this.reasonForm.valid){
    this.dialogRef.close(true);
    this.snackbar.showSuccess('Leave Rollback Successfully !!','');
    }
  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

}
