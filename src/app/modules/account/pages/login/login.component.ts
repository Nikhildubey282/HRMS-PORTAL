import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Regex } from 'src/app/constant/regex';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constant/messages';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

show:any=true;
hide:boolean=true;
loginForm!:FormGroup;
errorMsg = ACCOUNT_ERROR_MESSAGES;
  constructor(
    private _fb:FormBuilder,
    private route:Router,
    private formService:FormService,
    public authService:AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get frmCtrl() { return this.loginForm.controls; }

  createForm(){
    this.loginForm=this._fb.group({
      email:this.formService.getControl('email'),
      password:this.formService.getControl('password')

    })
  }

  nav_to_dashboard(){
    if(this.loginForm.valid){
      localStorage.setItem('isAuth', '234');

      this.route.navigate(['layout']);
      console.log('login succesful')

    }
  }

  showcontent(){
    this.show=false;
  }
  show1(){
    this.show=true;
  }



}
