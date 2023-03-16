import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AddTrainingComponent>,

  ) { }

  ngOnInit(): void {
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }

}
