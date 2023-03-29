import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dsr-edit',
  templateUrl: './dsr-edit.component.html',
  styleUrls: ['./dsr-edit.component.scss']
})
export class DsrEditComponent implements OnInit {
  lableProject='Project';
  projectData=['Training Project React JS','Miscellaneous','Interview'];
  dsrForm!:FormGroup;

  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.dsrForm=this._fb.group({
      project:['project',[Validators.required]],
      date:['',[Validators.required]],
      hours:['',[Validators.required]],
      dsr:[''
      ,[Validators.required]]

    })
  }

}
