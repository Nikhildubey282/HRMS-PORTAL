import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TermsComponent } from './terms/terms.component';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {

  constructor(
    public _route:Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  navigate_to_home(){
    this._route.navigate(['./layout'])
  }

  openDialog() {
    const dialogRef = this.dialog.open(TermsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


