import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel/public-api';

@Component({
  selector: 'app-work-aniversary',
  templateUrl: './work-aniversary.component.html',
  styleUrls: ['./work-aniversary.component.scss']
})
export class WorkAniversaryComponent implements OnInit,AfterViewInit {

  constructor() { }
  listOfNewFamilyMembers=[1,2,3]
  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList<ElementRef<HTMLDivElement>>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 2000, initialDelay: 1000 },
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

}
