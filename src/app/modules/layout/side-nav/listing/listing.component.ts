import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IsideNav } from 'src/app/constant/side-nav-constant';
import { LogoutConfirmationComponent } from '../../layout-parts/logout-confirmation/logout-confirmation.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  @Input() navlist!: IsideNav;
  @Input() isShowing!: boolean;
  showSubmenu: boolean = false;
  @Output() showsubmenu = new EventEmitter();

  constructor(
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  showSideNav(item:any){
    this.showsubmenu.emit(item);
  }

  parentChecker(navBarItem: any): boolean {
    let checker = this.router.url;
    // console.log(checker);

    let subMenuOptions = navBarItem.options;
    return subMenuOptions && subMenuOptions.some((subMenuItem: any) => subMenuItem.routerLink == checker);
  }

  openDialog1() {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('nikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
  }

}
