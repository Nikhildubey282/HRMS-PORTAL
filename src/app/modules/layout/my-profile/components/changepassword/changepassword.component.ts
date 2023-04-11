import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { slideAnimation } from 'src/animation';

import { CHANGE_PASSWORD } from 'src/app/constant/routes';
import { FormService } from 'src/app/services/form.service';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constant/messages';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
  animations:[
    slideAnimation
  ]

})
export class ChangepasswordComponent implements OnInit {
  errorMsg = ACCOUNT_ERROR_MESSAGES;
  changepasswordForm!:FormGroup;
  hide:boolean=true;

  @ViewChild(FormGroupDirective) formGroupDirective:FormGroupDirective;


  constructor(
    private _fb:FormBuilder,
    private formservice:FormService,
    private snackbarService:SnackBarService
  ) { }



  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.changepasswordForm=this._fb.group({
      changepassword:['',Validators.required],
      newpassword:['',[Validators.required]],
      confirmpassowrd:['',[Validators.required]]
    },

    )
  }

  get formCtrl() { return this.changepasswordForm.controls; }


  matchPassword() {
    if(this.changepasswordForm.valid){
    let password = this.changepasswordForm.controls['newpassword'].value;
    let confirmPassword = this.changepasswordForm.controls['confirmpassowrd'].value;
    console.log(password,'nikkkkkkkkkkkkkkkkkkkkk',confirmPassword);
    if(password!=confirmPassword){
      this.snackbarService.showError('New password and Confirm passowrd not matched','')
    }
    this.formGroupDirective.resetForm();
  }
  }

}
