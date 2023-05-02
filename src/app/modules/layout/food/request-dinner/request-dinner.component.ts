import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-dinner',
  templateUrl: './request-dinner.component.html',
  styleUrls: ['./request-dinner.component.scss']
})
export class RequestDinnerComponent implements OnInit {
  projectLabel='Project';
  projectData=['React JS','misscenllous'];
  dinnerForm!:FormGroup;
   today:any = new Date();
 dd:any = String(this.today.getDate()).padStart(2, '0');
 mm = String(this.today.getMonth() + 1).padStart(2, '0'); //January is 0!
 yyyy = this.today.getFullYear();

 request=false;

  constructor(private _fb:FormBuilder,
    private _elementRef:ElementRef
    ) { }

  ngOnInit(): void {
    this.createForm();

  }
  createForm(){
    this.dinnerForm=this._fb.group({
      date:[{value:this.today = this.mm + '/' + this.dd + '/' + this.yyyy,disabled:true},],
      project:[''],
      reason:['']
    })
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
