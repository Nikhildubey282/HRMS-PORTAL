import { Component, OnInit } from '@angular/core';
import { monthdata } from 'src/app/constant/constant';

@Component({
  selector: 'app-my-performance',
  templateUrl: './my-performance.component.html',
  styleUrls: ['./my-performance.component.scss']
})
export class MyPerformanceComponent implements OnInit {

  data=monthdata;




  // months=[1,2,3,4,5,6,7,8,9,10,11,12]

  constructor() { }

  ngOnInit(): void {
  }

}
