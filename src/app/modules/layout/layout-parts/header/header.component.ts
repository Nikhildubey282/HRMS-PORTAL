import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { slideAnimation } from 'src/animation';
import { LogoutConfirmationComponent } from '../logout-confirmation/logout-confirmation.component';
import { ABS_PROFILE } from 'src/app/constant/absolute-route';
import { Store } from '@ngrx/store';
import { imageSelector } from 'src/app/shared_store/selector';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    slideAnimation
  ]
})
export class HeaderComponent implements OnInit {
  @Input() isExpanded!:boolean;
  @Output() stateChnage:EventEmitter<boolean> =new EventEmitter<boolean>();
  @Output() ishamburgerCLick = new EventEmitter();
  notification=false;
  profile=ABS_PROFILE;
  profileSource:any;


  constructor(public dialog: MatDialog,
    private store:Store
    ) { }

  ngOnInit(): void {

    this.store.select(imageSelector).subscribe((data:any)=>
    {
      this.profileSource=data;


    })
  }
  expand(){

    this.isExpanded=!this.isExpanded;
    this.stateChnage.emit(this.isExpanded)
  }

  openDialog() {
    const dialogRef = this.dialog.open(HelpDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog1() {
    const dialogRef = this.dialog.open(LogoutConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('nikkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
  }

  }




