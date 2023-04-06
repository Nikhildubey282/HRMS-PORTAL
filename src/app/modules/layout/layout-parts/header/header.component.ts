import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { slideAnimation } from 'src/animation';


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


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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

  notification_drawer(){
    if(this.notification===false){
      this.notification=true;
    }
      else{
        this.notification=false;
      }


    }

  }




