import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Gallery_DATA } from 'src/app/constant/directory_constant';

@Component({
  selector: 'app-latest-appinventiv',
  templateUrl: './latest-appinventiv.component.html',
  styleUrls: ['./latest-appinventiv.component.scss']
})
export class LatestAppinventivComponent implements OnInit,AfterViewInit {
  list=[1,2];
  imageData=Gallery_DATA;
  @ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
  load: 3,
  // interval: {timing: 4000, initialDelay: 1000},
  loop: true,
  touch: true,
  velocity: 0.2,
  point:{
    visible:true
  }
}
dataSource: any = [];
arr = [
  {division_name:'left'},
  {division_name:'right'},
  {
    division_name:'jimmy'
  },
  {division_name:'work'}

]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.listToShow.forEach((item: any) => {
    //   this.dataSource.push(item);
    // });

    setTimeout(() => {
      this.listToShow.forEach((item: any) => {
        this.dataSource.push(item);
      });


    },500);
  }

}
