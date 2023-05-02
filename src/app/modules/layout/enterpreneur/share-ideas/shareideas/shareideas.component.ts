import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ABS_MYPITCH } from 'src/app/constant/absolute-route';
import { PATTERN } from 'src/app/constant/patterns';

@Component({
  selector: 'app-shareideas',
  templateUrl: './shareideas.component.html',
  styleUrls: ['./shareideas.component.scss']
})
export class ShareideasComponent implements OnInit {

  addbutton:boolean=false;
  pitchForm!:FormGroup;
  pattern=PATTERN;
  mypitch=ABS_MYPITCH;


  constructor(
    private _fb:FormBuilder,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.pitchForm=this._fb.group({
      name:[{value:'Nikhil Dubey', disabled: true},Validators.required],
      employeeId:[{value:'AI1612', disabled: true},Validators.required],
      DOB:[{value:'11/02/2002',disabled:true},Validators.required],
      pitchTitle:['',[Validators.required,Validators.pattern(this.pattern.name)]],
      industry:['',[Validators.required,Validators.pattern(this.pattern.name)]],
      type:['',[Validators.required,Validators.pattern(this.pattern.name)]],
      uploadFile:['',[Validators.required]]
    })
  }

  get Formctrl(){
    return this.pitchForm.controls
  }
  cancel(){
    this.route.navigate(['./layout/my-pitch'])
  }


}
