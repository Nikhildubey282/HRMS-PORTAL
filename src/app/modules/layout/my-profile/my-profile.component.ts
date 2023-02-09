import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/animation';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  buttonValue!:any;


  constructor() { }

  ngOnInit(): void {
  }

  toggle(value:any){

    this.buttonValue=value.id;
    console.log(this.buttonValue,'nikhil')

  }

}
