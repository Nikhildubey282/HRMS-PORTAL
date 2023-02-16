import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideAnimation } from 'src/animation';
import { BASIC_INFO_MESSAGE } from 'src/app/constant/messages';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  animations:[
    slideAnimation
  ]
})
export class BasicInfoComponent implements OnInit {

  errorMsg=BASIC_INFO_MESSAGE;
  basicinfoForm!:FormGroup;

  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.basicinfoForm=this._fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      gender:['',[Validators.required]],
      martialStatus:['',[Validators.required]],
      contactNumber:['',[Validators.required]]


    })
  }
  get formCtrl() { return this.basicinfoForm.controls; }


}
