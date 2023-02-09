import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/animation';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  animations:[
    slideAnimation
  ]
})
export class BasicInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
