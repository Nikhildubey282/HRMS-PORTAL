import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/animation';

@Component({
  selector: 'app-apprasial',
  templateUrl: './apprasial.component.html',
  styleUrls: ['./apprasial.component.scss'],
  animations:[
    slideAnimation
  ]

})
export class ApprasialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
