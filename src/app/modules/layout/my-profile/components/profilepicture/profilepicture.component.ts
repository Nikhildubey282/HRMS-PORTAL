import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/animation';

@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrls: ['./profilepicture.component.scss'],
  animations:[
    slideAnimation
  ]
})
export class ProfilepictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
