import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  constructor(
    public _route:Router
  ) { }

  ngOnInit(): void {
  }

  navigate_to_home(){
    this._route.navigate(['./layout'])
  }

}
