import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DIRECTORY_EMPLOYEE_DATA } from 'src/app/constant/constant';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  DATA:any[]=DIRECTORY_EMPLOYEE_DATA;
  options=['ALL','Angular','Android','Finance'];


  directoryForm!:FormGroup;
  filteredOptions!: Observable<string[]>;
  data:any;


  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(){
    this.directoryForm=this._fb.group({
      name:['',[]],
      dropdown:['']
    })
  }

   _filter(value: any){
    this.DATA=DIRECTORY_EMPLOYEE_DATA;
    const filterValue = value.trim();
    this.DATA=this.DATA?.filter((option:any) => option.EMP_NAME?.toLowerCase()?.includes(filterValue));
    console.log(this.DATA,'sfjsjkjksjkssjjk')

    return this.DATA?.filter((option:any) => option.EMP_NAME?.toLowerCase()?.includes(filterValue));

  }

  clickSearch(){
    console.log("this is data>>>>",this.data);
    this._filter(this.data)

  }

  keyup(value:any){
    console.log(value.target?.value);
    this.data = value.target.value;
    this.clickSearch()

  }

  RESET(){
    this.DATA=DIRECTORY_EMPLOYEE_DATA;

  }

  Arr(e:any){
    console.log(e);
    if(e.value==='ALL')
    this.DATA=DIRECTORY_EMPLOYEE_DATA;
    else{
    this.DATA=DIRECTORY_EMPLOYEE_DATA;
    this.DATA = this.DATA.filter(item => item.EMP_TECHNOLOGY === e.value);
    }
  }
  }







