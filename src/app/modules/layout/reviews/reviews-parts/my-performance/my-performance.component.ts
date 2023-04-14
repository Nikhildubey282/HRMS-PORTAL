import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { monthdata } from 'src/app/constant/constant';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {

  data=monthdata;
  currentData:any;
  selectControl=new FormControl('');

  // months=[1,2,3,4,5,6,7,8,9,10,11,12]

  constructor(
    private _route:Router
  ) { }

  ngOnInit(): void {
    this.currentData=this.data.reviewData[1];
    this.selectControl.setValue(this.data.reviewData[1].year)
    console.log(this.data.reviewData[0].year)


  }

  navigate_to_home(){
    this._route.navigate(['./layout'])
  }

  onSelect() {
    console.log(this.selectControl.value);

    const idx = this.data.reviewData.filter(

      (item) => {  return item.year==this.selectControl.value   }
    );
    console.log(idx)


    this.currentData =idx[0];
    // console.log(this.currentData)
  }

}
