import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-enrollment',
  templateUrl: './cancel-enrollment.component.html',
  styleUrls: ['./cancel-enrollment.component.scss']
})
export class CancelEnrollmentComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CancelEnrollmentComponent>,
  ) { }

  ngOnInit(): void {
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }

}
