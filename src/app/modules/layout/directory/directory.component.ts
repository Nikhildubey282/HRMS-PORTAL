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


  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.filteredOptions = this.directoryForm.controls.name.valueChanges.pipe(
      startWith(''),
      map((value) => {
        let res = this._filter(value || '');
        if (!res.length) {
          res = ['no results Found'];
        }
        console.log(res);
        return res;
      })
    );
  }


  createForm(){
    this.directoryForm=this._fb.group({
      name:['',[Validators.required]],
    })
  }

   _filter(value: any): string[] {
    // alert(`event value..... ${this.DATA?.filter((option:any) => option?.toLowerCase()?.includes(filterValue))}`);
    const filterValue = value.target?.value?.toLowerCase();
    console.log( this.DATA?.filter((option:any) => option.EMP_NAME.toLowerCase()?.includes(filterValue)));



    return this.DATA?.filter((option:any) => option.EMP_NAME?.toLowerCase()?.startsWith(filterValue));
  }
  }







