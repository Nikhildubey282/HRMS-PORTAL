import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChild('submenu', {static: false}) submenu!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
