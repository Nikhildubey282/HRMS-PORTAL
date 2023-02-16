import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { slideAnimation } from 'src/animation';
import { FormService } from 'src/app/services/form.service';
import { QUALIFICATION_MESSAGE } from 'src/app/constant/messages';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations:[slideAnimation]
})
export class QualificationComponent implements OnInit {
  errorMsg=QUALIFICATION_MESSAGE;

  qualificationForm!:FormGroup;

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  constructor(
    private _fb:FormBuilder,
    private formservice:FormService


  ) { }



  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.qualificationForm=this. _fb.group({
      university:this.formservice.getControl('university'),
      educationLevel:['',[Validators.required]],
      language:['',[Validators.required]],
      professionalCourse:['',[Validators.required]],
      descripition:['',[Validators.required]]
    })
  }


  get formCtrl() { return this.qualificationForm.controls; }


}
