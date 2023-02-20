import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constant/messages';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  show:boolean=true;
  hide:boolean=true;
  forgetPassword!:FormGroup;
  errorMsg = ACCOUNT_ERROR_MESSAGES;

  constructor(
    private _fb:FormBuilder,
    private formService:FormService
  ) { }

  ngOnInit(): void {
    this.createform();
  }
  get frmCtrl() { return this.forgetPassword.controls; }

  createform(){
    this.forgetPassword=this._fb.group({
      password:this.formService.getControl('password')
    })
  }
  showcontent(){
    this.show=false;
  }
  show1(){
    this.show=true;
  }

}
