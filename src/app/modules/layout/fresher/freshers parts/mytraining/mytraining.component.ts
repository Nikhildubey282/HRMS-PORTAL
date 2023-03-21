import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MYTRAINING } from 'src/app/constant/constant';
import { FeedbackComponent } from '../training-details/dialog-component/feedback/feedback.component';

@Component({
  selector: 'app-mytraining',
  templateUrl: './mytraining.component.html',
  styleUrls: ['./mytraining.component.scss']
})
export class MytrainingComponent implements OnInit {
  data:any[]=MYTRAINING;
  // card:any[]=[1,2]

  constructor(
    private route:Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  viewDetails(item){
    console.log('jkdddddd')
    // this.route.navigate(['layout/freshers/training-details']);
      console.log(item,'item');
      const url = this.route.serializeUrl(
        this.route.createUrlTree([`/layout/freshers/training-details/${item.id}`])
      );
      window.open(url, '_blank');
    }

    openDialog() {
      const dialogRef = this.dialog.open(FeedbackComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }


