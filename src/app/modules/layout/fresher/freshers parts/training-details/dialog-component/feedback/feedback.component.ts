import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FeedbackComponent>,

  ) { }

  ngOnInit(): void {
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }

}
