import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';
import { ReferCandidateComponent } from './dialog component/refer-candidate/refer-candidate.component';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit,AfterViewInit {

  constructor(
    public dialog:MatDialog,
    private routes:Router
  ) { }

  listOfNewFamilyMembers=[1,2,3]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };

  dataSource:any=[]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.listToShow.forEach((item:any)=>{
      this.dataSource.push(item);
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(ReferCandidateComponent,{
      data:
        {
          departmentName:'Marketing',
          jobCode:'AP1002',
          location:'Noida',
          experience:'3 to 5 years'
        }

    });
  }

  open_viewdetail(){
    console.log('open              kdkdkjkdajk')
    this.routes.navigate(['./layout/refer-candidate/view-detail'])

  }

}
