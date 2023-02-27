import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { slideAnimation } from 'src/animation';
import { FormService } from 'src/app/services/form.service';
import { QUALIFICATION_MESSAGE } from 'src/app/constant/messages';
import { MatTableDataSource } from '@angular/material/table';


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
  labelLanguage='language'
  languageDropdown =['English','Hindi']
  minDate:Date
  maxDate:Date

  qualificationForm!:FormGroup;

  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'Action', key:'sNo',type:'text'},
    { heading: 'School/University', key: 'fName', type: 'link', link: '/dashboard/client-details' },
    { heading: 'Time period ', key:'mName',type:'text'},
    { heading: 'Education Level', key:'lName',type:'text'},
  ]
  Table_DATA: any[] = [

  ];

  constructor(
    private _fb:FormBuilder,
    private formservice:FormService


  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 60, 0, 1);
    this.maxDate = new Date(currentYear - 20, 11, 31);
   }



  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  createForm(){
    this.qualificationForm=this. _fb.group({
      university:this.formservice.getControl('university'),
      educationLevel:['',[Validators.required]],
      startdate:['',Validators.required],
      enddate:['',Validators.required],
      language:['',[Validators.required]],
      professionalCourse:['',[Validators.required]],
      descripition:['',[Validators.required]]
    })
  }


  get formCtrl() { return this.qualificationForm.controls; }


}
