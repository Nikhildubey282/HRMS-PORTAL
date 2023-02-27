import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DIRECTORY_EMPLOYEE_DATA } from 'src/app/constant/directory_constant';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  DATA:any[]=DIRECTORY_EMPLOYEE_DATA;

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
    })
  }

   _filter(value: any){
    const filterValue = value.trim();
    // console.log( this.DATA?.filter((option:any) => option.EMP_NAME.toLowerCase()?.includes(filterValue)),'jadsbjbzakskas');
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

  }
  }







