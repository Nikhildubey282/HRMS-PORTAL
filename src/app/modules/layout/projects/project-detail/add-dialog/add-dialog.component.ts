import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
  addForm!:FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  this.createForm();
  }

  createForm(){
    this.addForm=this._fb.group({
      addTag:['',[Validators.required]]
    })
  }

}
