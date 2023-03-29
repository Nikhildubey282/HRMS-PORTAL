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
  labelEducation='Education Level';
  labelLanguage='language'
  languageDropdown =['English','Hindi']
  minDate:Date
  maxDate:Date

  qualificationForm!:FormGroup;

  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'Action', key:'btn',type:'edit-button'},
    { heading: 'School/University', key:'school', type: 'text' },
    { heading: 'Time period ', key:'time_period',type:'text'},
    { heading: 'Education Level', key:'educationLevel',type:'text'},
  ]
  Table_DATA: any[] = [
    {btn:'',school:'st calres',time_period:'4 years',educationLevel:'2'}

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
      university:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      educationLevel:['',[Validators.required]],
      startdate:['',Validators.required],
      enddate:['',Validators.required],
      language:['',[Validators.required]],
      professionalCourse:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      descripition:['',[Validators.required,Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]]
    })
  }


  get formCtrl() { return this.qualificationForm.controls; }


  submitHandler() {
    console.log(this.qualificationForm.valid,'sdfhhsdfjhsdjhjhsdjhjsdjjsd')

      this.Table_DATA.push({
        school:  this.formCtrl['university'].value,
        // fromTimetotoTime: this.getDatevalue(),
        educationLevel: this.formCtrl['educationLevel'].value,
        // id: Date.now(),
        // language: this.formCtrl['language'].value,
        // professionalCourses:
        // this.formCtrl['professionalCourses'].value,
        // description: this.formCtrl['description'].value,
        // fromTime: this.formCtrl['fromTime'].value,
        // toTime: this.formCtrl['toTime'].value,
      });
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);


      // this.dataSource = new MatTableDataSource<QUALIFICATIONTABLE>(
      //   this.Table_DATA
      // );
      // this.resetForm();
      this.createForm();
  //   } else {
  //     this.qualificationForm.markAllAsTouched();
  //   }
   }


}
