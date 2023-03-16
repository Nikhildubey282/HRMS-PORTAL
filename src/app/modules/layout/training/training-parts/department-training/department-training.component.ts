import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TRAINING } from 'src/app/constant/constant';
import { CancelEnrollmentComponent } from '../upcoming-training/dialogcomponent/cancel-enrollment/cancel-enrollment.component';
import { AddTrainingComponent } from './dialog-component/add-training/add-training.component';

@Component({
  selector: 'app-department-training',
  templateUrl: './department-training.component.html',
  styleUrls: ['./department-training.component.scss']
})
export class DepartmentTrainingComponent implements OnInit {
  data:any[]=TRAINING ;

  constructor(
    public dialog: MatDialog,
    public dialog1: MatDialog,
   private route:Router
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CancelEnrollmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  viewDetails(item){
    // const url = this.route.serializeUrl(
    //   this.route.createUrlTree([`/layout/training/trainingdetails/${item.id}`])
    // );
    // window.open(url, '_blank');
    this.route.navigate([`/layout/training/trainingdetails/${item.id}`])
  }

  openDialog1() {
    const dialogRef = this.dialog1.open(AddTrainingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
