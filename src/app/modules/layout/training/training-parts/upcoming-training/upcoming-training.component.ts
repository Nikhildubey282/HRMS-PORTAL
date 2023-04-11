import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TRAINING } from 'src/app/constant/constant';
import { CancelEnrollmentComponent } from './dialogcomponent/cancel-enrollment/cancel-enrollment.component';

@Component({
  selector: 'app-upcoming-training',
  templateUrl: './upcoming-training.component.html',
  styleUrls: ['./upcoming-training.component.scss']
})
export class UpcomingTrainingComponent implements OnInit {
  data:any[]=TRAINING ;

  constructor(
   public dialog: MatDialog,
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
}


