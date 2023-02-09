import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded!:boolean;
  @Output() stateChnage:EventEmitter<boolean> =new EventEmitter<boolean>();
  @Output() ishamburgerCLick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  expand(){

    this.isExpanded=!this.isExpanded;
    this.stateChnage.emit(this.isExpanded)
  }



}
