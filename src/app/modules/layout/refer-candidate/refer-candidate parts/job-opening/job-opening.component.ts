import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {

  card=[1,2,3,4,5,6]

  constructor() { }

  ngOnInit(): void {
  }

}
