import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  labelDepartment='Education Level';
  projectData=['1','2'];

  constructor(
    private dialogRef: MatDialogRef<EditDialogComponent>,

  ) { }

  ngOnInit(): void {
  }
  crossClick() {
    this.dialogRef.close('cancel');
  }



}
