import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.scss']
})
export class ProjectAllComponent implements OnInit {

  imgArray=[1,2,3];
  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  naviagte_projectdetail(){
    this._route.navigate(['layout/project-detail'])
  }

}
