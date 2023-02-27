import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SHAREIDEAS } from 'src/app/constant/routes';


@Component({
  selector: 'app-enterpreneur',
  templateUrl: './enterpreneur.component.html',
  styleUrls: ['./enterpreneur.component.scss']
})
export class EnterpreneurComponent implements OnInit {

  shareideas=SHAREIDEAS;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  routeToShareIdea(){
this.route.navigate(['layout/add_pitch'])
  }

}
