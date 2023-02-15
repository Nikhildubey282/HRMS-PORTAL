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
  grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
  load: 3,
  // interval: {timing: 1000, initialDelay: 1000},
  loop: true,
  touch: true,
  velocity: 0.2
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
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }

}
