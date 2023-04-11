import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router,NavigationEnd } from '@angular/router';
import {delay, filter} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CovidComponent } from './layout-parts/covid/covid.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild("sidenav") sidenav!: MatSidenav
  isExpanded: boolean = true;
  isShowing = true;



  constructor(private  observer: BreakpointObserver,private _route :Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 950px)']).pipe(delay(1)).subscribe((res:any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this._route.events
    .pipe(
      // untilDestroyed(this),
      filter((e) => e instanceof NavigationEnd)
    )
    .subscribe(() => {
      if (this.sidenav.mode === 'over') {
        this.sidenav.close();
      }
    });
  }


  updateISExpanded(e: boolean) {
    this.isExpanded = e;
    if(this.sidenav.mode !="side"){
      this.isShowing = true;
      this.sidenav.toggle();
    }else{
      this.isShowing = e
    }
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

  openDialog(): void {
    const dialogRef =this.dialog.open(CovidComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }



}
