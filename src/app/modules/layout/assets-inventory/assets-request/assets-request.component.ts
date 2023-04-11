import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PATTERN } from 'src/app/constant/patterns';


@Component({
  selector: 'app-assets-request',
  templateUrl: './assets-request.component.html',
  styleUrls: ['./assets-request.component.scss']
})
export class AssetsRequestComponent implements OnInit {
  genderLabel='Assets Categories *';
  quanity='Quanity *';
  Priority='Priority *'
  genderData=['Male','Female'];
  matrialData=['Single','Married','Divoced'];
  allocation='Allocation Type *';
  addbutton:boolean=false;
  dataSource = new MatTableDataSource<any>();
  assetsRequest!:FormGroup;
  pattern=PATTERN

  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Status', key:'mName',type:'text'},
    { heading: 'Request reason', key:'lName',type:'text'},
    {heading:'Priority',key:'Name',type:'text'},
    {heading:	'Requested At',key:'rd',type:'text'},
    {heading:'Assets Category',},
    {heading:'Allocation Type'},
    {heading:'Company'},
    // {heading:'Action'}

  ]
  Table_DATA: any[] = [

  ];


  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();

  }
  createForm(){
    this.assetsRequest=this._fb.group({
      category:['',[Validators.required]],
      quanity:['',[Validators.required]],
      priority:['',[Validators.required]],
      date:['',[Validators.required]],
      type:['',[Validators.required]],
      requestreason:['',[Validators.required,Validators.pattern(this.pattern.name)]]


    })
  }
  get formCtrl(){
    return this.assetsRequest.controls;

  }

  add(){
    if(this.addbutton===false)
    this.addbutton=true;

    else{
      this.addbutton=false;

    }
  }



}
