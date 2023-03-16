import { Component, OnInit } from '@angular/core';
import { ABS_REFERCANDIDATE } from 'src/app/constant/absolute-route';

@Component({
  selector: 'app-referal-list',
  templateUrl: './referal-list.component.html',
  styleUrls: ['./referal-list.component.scss']
})
export class ReferalListComponent implements OnInit {
  jobOpening=ABS_REFERCANDIDATE

  constructor() { }

  ngOnInit(): void {
  }

}
