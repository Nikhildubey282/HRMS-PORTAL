import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PATTERN } from 'src/app/constant/patterns';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {
  addTrainingForm!:FormGroup;
  pattern=PATTERN;

  constructor(
    private dialogRef: MatDialogRef<AddTrainingComponent>,
    private _fb:FormBuilder

  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.addTrainingForm=this._fb.group({
      trainingName:['',[Validators.required]],
      teamName:['',[Validators.required]],
      learning:['',[Validators.required,Validators.pattern(this.pattern.name)]],
      skills:['',[Validators.required,Validators.pattern(this.pattern.name)]]
    })
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }

}
