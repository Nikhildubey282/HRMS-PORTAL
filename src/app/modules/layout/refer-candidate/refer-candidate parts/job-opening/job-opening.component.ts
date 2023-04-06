import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DETAILS } from 'src/app/constant/routes';
import { ReferCandidateComponent } from '../../../home/job-opening/dialog component/refer-candidate/refer-candidate.component';
import { JOBOPENING } from 'src/app/constant/constant';



@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {

  // card=[1,2,3,4,5,6,7,8,9]
  DATA:any[]=JOBOPENING;

  constructor(
    public dialog: MatDialog,
    private route:Router
  ) { }

  ngOnInit(): void {
    console.log(this.DATA,'jdjdsjksjkdjk')

  }

  openDialog() {
    const dialogRef = this.dialog.open(ReferCandidateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  view(){
    console.log('sjnkdnnnnnnnnnn')
    this.route.navigate(['/layout/refer-candidate/view-detail']);

  }
}





