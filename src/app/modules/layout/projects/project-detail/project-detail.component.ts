import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  totalTags=[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog(): void {
    const dialogRef =this.dialog.open(AddDialogComponent, {
      // width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.totalTags.push(result);
      console.log(this.totalTags,'totalarray')
    });
  }


}
