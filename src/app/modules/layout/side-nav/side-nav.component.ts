import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { IsideNav, sideNavList } from 'src/app/constant/side-nav-constant';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  // @ViewChild('sidenav') sidenav!: MatSidenav;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
  @Input() isExpanded!:boolean;
  @Input() isShowing!:boolean;
  @Input() navlist!:IsideNav;
  sidenav=sideNavList;

  @Output() stateChnage:EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  expand(){
    this.stateChnage.emit(this.isExpanded)
  }

  submenu(data:any){
    console.log(data)
    this.sidenav.map((navBarItem:any)=>{
      if(navBarItem.title != data.title){
        navBarItem.subMenuClick = false;
      }
    })
    data.subMenuClick = !data.subMenuClick
    console.log(this.sidenav,'submenu',data);
  }


}
