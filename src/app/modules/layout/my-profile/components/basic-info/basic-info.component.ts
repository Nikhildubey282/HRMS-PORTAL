import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { slideAnimation } from 'src/animation';
import { BASIC_INFO_MESSAGE } from 'src/app/constant/messages';
import { PATTERN } from 'src/app/constant/patterns';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  animations:[
    slideAnimation
  ]
})
export class BasicInfoComponent implements OnInit {

  minDate:Date
  maxDate:Date
  errorMsg=BASIC_INFO_MESSAGE;
  basicinfoForm!:FormGroup;
  genderLabel='Gender';
  martialLabel='Matrial Status'
  genderData=['Male','Female'];
  matrialData=['Single','Married','Divoced'];
  nikhil='shiva';
  Pattern=PATTERN;
  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;


  constructor(
    private _fb:FormBuilder,
    private snackbar:SnackBarService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 60, 0, 1);
    this.maxDate = new Date(currentYear - 20, 11, 31);
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.basicinfoForm=this._fb.group({
      firstName:['',[Validators.required,Validators.pattern(this.Pattern.name),Validators.minLength(3),Validators.maxLength(20)]],
      lastName:['',[Validators.required,Validators.pattern(this.Pattern.name),Validators.minLength(3),Validators.maxLength(20)]],
      dateofBirth:['',[Validators.required]],
      gender:['',[Validators.required]],
      martialStatus:['',[Validators.required]],
      contactNumber:['',[Validators.required,Validators.pattern(this.Pattern.phone)]],
      years:['',[Validators.required,Validators.pattern(this.Pattern.onlyNUmber),Validators.maxLength(2)]],
      months:['',[Validators.required,Validators.pattern(this.Pattern.onlyNUmber),Validators.maxLength(2)]],
      years2:['',[Validators.required,Validators.pattern(this.Pattern.onlyNUmber),Validators.maxLength(2)]],
      months2:['',[Validators.required,Validators.pattern(this.Pattern.onlyNUmber),Validators.maxLength(2)]],
      descripition:['India',[Validators.required,Validators.maxLength(200)]]



    })
  }
  get formCtrl() { return this.basicinfoForm.controls; }

  submit(){

    if(this.basicinfoForm.valid){
      this.snackbar.showSuccess('Basic info added sucessfully','' )
      this.formRef.resetForm();

    }
    else{
      this.snackbar.showError('Enter a required field','')
    }
  }
  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }


}
