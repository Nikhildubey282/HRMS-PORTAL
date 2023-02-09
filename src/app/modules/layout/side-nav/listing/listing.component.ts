import { Component, Input, OnInit } from '@angular/core';
import { IsideNav } from 'src/app/constant/side-nav-constant';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() navlist!: IsideNav;
  @Input() isShowing!: boolean;
  showSubmenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
