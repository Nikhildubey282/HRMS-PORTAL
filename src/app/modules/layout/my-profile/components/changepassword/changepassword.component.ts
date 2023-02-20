import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { slideAnimation } from 'src/animation';

import { CHANGE_PASSWORD } from 'src/app/constant/routes';
import { FormService } from 'src/app/services/form.service';
import { ACCOUNT_ERROR_MESSAGES } from 'src/app/constant/messages';

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

  constructor(
    private _fb:FormBuilder,
    private formservice:FormService
  ) { }

  ngOnInit(): void {
    this.createForm();

  }

  createForm(){
    this.changepasswordForm=this._fb.group({
      changepassword:this.formservice.getControl('password'),
      newpassword:['',[Validators.required]],
      confirmpassowrd:['',[Validators.required]]
    })
  }

  get formCtrl() { return this.changepasswordForm.controls; }

}
