import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shareideas',
  templateUrl: './shareideas.component.html',
  styleUrls: ['./shareideas.component.scss']
})
export class ShareideasComponent implements OnInit {

  pitchForm!:FormGroup;

  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.pitchForm=this._fb.group({
      name:[{value:'Nikhil Dubey', disabled: true},Validators.required],
      employeeId:[{value:'AI1612', disabled: true},Validators.required],
      DOB:[{value:'11/02/2002',disabled:true},Validators.required],
      pitchTitle:['',Validators.required],
      industry:['',Validators.required],
      type:['',Validators.required],
      uploadFile:['',Validators.required]
    })
  }

  get Formctrl(){
    return this.pitchForm.controls
  }

}
