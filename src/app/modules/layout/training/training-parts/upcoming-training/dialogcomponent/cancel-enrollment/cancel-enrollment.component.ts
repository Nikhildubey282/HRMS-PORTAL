import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-enrollment',
  templateUrl: './cancel-enrollment.component.html',
  styleUrls: ['./cancel-enrollment.component.scss']
})
export class CancelEnrollmentComponent implements OnInit {

  cancelreasonForm!:FormGroup

  constructor(
    private dialogRef: MatDialogRef<CancelEnrollmentComponent>,
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.cancelreasonForm=this._fb.group({
      reason:['']
    })
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }

}
