import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  addForm!:FormGroup;

  constructor(private _fb:FormBuilder,
    private dialogRef: MatDialogRef<AddDialogComponent>,

    ) { }

  ngOnInit(): void {
  this.createForm();
  }
  crossClick() {
    this.dialogRef.close();
  }

  createForm(){
    this.addForm=this._fb.group({
      addTag:['',]
    })
  }

}
