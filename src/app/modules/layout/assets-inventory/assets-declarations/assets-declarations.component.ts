import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PATTERN } from 'src/app/constant/patterns';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';

@Component({
  selector: 'app-assets-declarations',
  templateUrl: './assets-declarations.component.html',
  styleUrls: ['./assets-declarations.component.scss']
})
export class AssetsDeclarationsComponent implements OnInit {
  os='OS';
  osData=['Linux','Android','IOS','Windows'];
  matrialData=['Single','Married','Divoced'];
  allocation='Device is in working condition ?';
  conditionData=['yes','No']
  addbutton:boolean=false;
  dataSource = new MatTableDataSource<any>();
  declareForm!:FormGroup;
  pattern=PATTERN;
  @ViewChild(FormGroupDirective) FormGroupDirective:FormGroupDirective;


  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Employee ID', key:'employeeId',type:'text'},
    { heading: 'Unique Asset Code', key:'code',type:'text'},
    {heading:'Serial Number',key:'serialNo',type:'text'},
    {heading:	'Model Number',key:'modelNo',type:'text'},
    {heading:'OS',type:'text',key:'os'},
    {heading:'OS version',type:'text',key:'osVersion'},
    {heading:'Brand',type:'text',key:'brand'},
    {heading:'Colour',type:'text',key:'color'},
    // {heading:'Images',type:'text',key:'Image'},
    {heading:'Is Working?',type:'text',key:'status'},
    {heading:'Added',type:'text',key:'added'},


  ]
  Table_DATA: any[] = [

  ];


  constructor(
    private _fb:FormBuilder,
    private snackbar:SnackBarService,
    private dialog:MatDialog,
    private _elementRef:ElementRef
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();

  }

  createForm(){
    this.declareForm=this._fb.group({
      employeeId:['AI1612',[Validators.required]],
      code:['',[Validators.required,Validators.maxLength(50)]],
      serialNo:['',[Validators.required,Validators.maxLength(50)]],
      modelNo:['',[Validators.required,Validators.maxLength(50)]],
      os:['',[Validators.required]],
      osVersion:['',[Validators.required]],
      brand:['',[Validators.required,Validators.pattern(this.pattern.name),Validators.maxLength(50)]],
      color:['',[Validators.required,Validators.pattern(this.pattern.name),Validators.maxLength(50)]],
      status:['',[Validators.required]],
      Image:['',[Validators.required]]
    })
  }

  get formCtrl(){
    return this.declareForm.controls

  }

  noSpace(event:any){
    if(event.target.selectionStart == 0 && event.code == "Space"){
      event.preventDefault();
    }
  }

  submit(){
    console.log(this.declareForm.value);
    console.log(this.declareForm.valid);

    if(this.declareForm.valid){
    this.Table_DATA.push({
      sNo:this.Table_DATA.length+1,
      employeeId:this.formCtrl.employeeId.value,
      code:this.formCtrl.code.value,
      serialNo:this.formCtrl.serialNo.value,
      modelNo:this.formCtrl.modelNo.value,
      os:this.formCtrl.os.value,
      osVersion:this.formCtrl.osVersion.value,
      brand:this.formCtrl.brand.value,
      color:this.formCtrl.color.value,
      Image:this.formCtrl.Image.value,
      status:this.formCtrl.status.value,
      added:'1'
    })
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.FormGroupDirective.resetForm();
    this.addbutton=false;
    this.snackbar.showSuccess('Data Added Successfully','')
  }


  }

  openDialog1() {
    const dialogRef = this.dialog.open(HelpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log();
    });
    console.log('nikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
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



