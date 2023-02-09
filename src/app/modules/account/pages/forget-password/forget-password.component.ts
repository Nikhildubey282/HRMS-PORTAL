import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  show:boolean=true;
  hide:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  showcontent(){
    this.show=false;
  }
  show1(){
    this.show=true;
  }

}
