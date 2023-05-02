import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PATTERN } from 'src/app/constant/patterns';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-assets-request',
  templateUrl: './assets-request.component.html',
  styleUrls: ['./assets-request.component.scss']
})
export class AssetsRequestComponent implements OnInit {
  genderLabel='Assets Categories *';
  quanity='Quanity *';
  Priority='Priority *'
  categoryData=['Laptop','Mobile','Desktop'];
  quanityData=['1','2','3'];
  priorityData=['Low','Medium','High']
  allocationData=['Peramanment','temporay']
  allocation='Allocation Type *';
  addbutton:boolean=false;
  dataSource = new MatTableDataSource<any>();
  assetsRequest!:FormGroup;
  pattern=PATTERN
  @ViewChild(FormGroupDirective) FormGroupDirective:FormGroupDirective;


  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Status', key:'status',type:'text'},
    { heading: 'Request reason', key:'requestreason',type:'text'},
    {heading:'Priority',key:'priority',type:'text'},
    {heading:	'Requested At',key:'date',type:'text'},
    {heading:'Assets Category',key:'category',type:'text'},
    {heading:'Allocation Type',key:'type',type:'text'},
    {heading:'Company',key:'company',type:'text'},
    // {heading:'Action'}

  ]
  Table_DATA: any[] = [

  ];


  constructor(
    private _fb:FormBuilder,
    private datepipe:DatePipe,
    private snackbar:SnackBarService,
    private _elementRef:ElementRef
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
      requestreason:['',[Validators.required,Validators.maxLength(200),Validators.minLength(5)]]
    })
  }
  get formCtrl(){
    return this.assetsRequest.controls;

  }

  sumbit(){
    if(this.assetsRequest.valid){
    this.Table_DATA.push({
      sNo:this.Table_DATA.length+1,
      status:'Approved',
      requestreason:this.formCtrl.requestreason.value,
      priority:this.formCtrl.priority.value,
      date:this.datepipe.transform(this.formCtrl.date.value,'dd-MM-YYYY'),
      category:this.formCtrl.category.value,
      type:this.formCtrl.type.value,
      company:'HP'
    });
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.snackbar.showSuccess('Request added Sucessfully','')
    this.FormGroupDirective.resetForm();
    this.addbutton=false
  }

  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }


  toogle(){
    var content = this._elementRef.nativeElement.querySelector('form');

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 2*content.scrollHeight + "px";
    }
  }



}
