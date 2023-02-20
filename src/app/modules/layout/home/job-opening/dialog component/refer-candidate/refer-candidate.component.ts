import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-refer-candidate',
  templateUrl: './refer-candidate.component.html',
  styleUrls: ['./refer-candidate.component.scss']
})
export class ReferCandidateComponent implements OnInit {

  referCandidateForm!:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private dialogRef: MatDialogRef<ReferCandidateComponent>,

  ) { }

  ngOnInit(): void {
    this.createform();
  }

  createform(){
    this.referCandidateForm=this._fb.group({


    })
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }

}
