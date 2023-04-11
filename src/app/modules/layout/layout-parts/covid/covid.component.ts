import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {
  covidhelpForm!:FormGroup;


  constructor(
    private dialogRef: MatDialogRef<CovidComponent>,
    private _fb:FormBuilder
  ) { }
  @ViewChild(FormGroupDirective) formRef: FormGroupDirective;
  listOfNewFamilyMembers=[1,2,3,4]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md:2, lg: 1, all: 0 },
    gridBreakpoints:{sm: 400, md: 900, lg: 1300, xl: 1300},
    load: 1,
    interval: { timing: 4000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  dataSource:any=[]


  ngOnInit(): void {
    this.createForm();
  }
  ngAfterViewInit(): void {
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })
  }

  createForm(){
    this.covidhelpForm=this._fb.group({
      title:['',[Validators.required]],
      mobile:['',[Validators.required]],
      address:['',[Validators.required]],
      descrpition:['',[Validators.required]]


    })
  }

  crossClick() {
    this.dialogRef.close('cancel');
  }

  submit_button(){
    this.formRef.resetForm();
  }

}
