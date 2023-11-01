import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { slideAnimation } from 'src/animation';
import { imageSelector } from 'src/app/shared_store/selector';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  buttonValue!:any;
  profileSource:any;


  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
    this.store.select(imageSelector).subscribe(data =>{
      console.log(data);

      this.profileSource = data;
    }
      )

      this.store.select(imageSelector).subscribe(data =>{
        console.log(data,'deleted');
      })
  }

  toggle(value:any){

    this.buttonValue=value.id;
    console.log(this.buttonValue,'nikhil')

  }

}
