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
  genderLabel='Gender';
  martialLabel='Matrial Status'
  genderData=['Male','Female'];
  matrialData=['Single','Married','Divoced'];

  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.basicinfoForm=this._fb.group({
      firstName:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      lastName:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      dateofBirth:['',[Validators.required]],
      gender:['',[Validators.required]],
      martialStatus:['',[Validators.required]],
      contactNumber:['',[Validators.required,Validators.pattern(/^\d+$/)]],
      years:['',Validators.required,Validators.pattern(/^\d{10}/)],
      months:['',Validators.required,Validators.pattern(/^\d{10}/)],
      years2:['',Validators.required,Validators.pattern(/^\d{10}/)],
      months2:['',Validators.required,Validators.pattern(/^\d{10}/)]


    })
  }
  get formCtrl() { return this.basicinfoForm.controls; }


}
