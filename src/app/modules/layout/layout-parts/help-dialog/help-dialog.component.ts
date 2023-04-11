import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
  styleUrls: ['./help-dialog.component.scss']
})
export class HelpDialogComponent implements OnInit {

  covidhelpForm!:FormGroup;

  constructor(
    private dialogRef: MatDialogRef<HelpDialogComponent>,
    private _fb:FormBuilder

  ) { }

  ngOnInit(): void {
  }

  createForm(){
    this.covidhelpForm=this._fb.group({
      
    })
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }



}
