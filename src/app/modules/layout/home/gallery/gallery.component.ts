import { AfterViewInit, Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NguCarouselConfig } from '@ngu/carousel';
import { Gallery_DATA } from 'src/app/constant/constant';
import { GallerydialogComponent } from './dialog component/gallerydialog/gallerydialog.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit,AfterViewInit {
imageData=Gallery_DATA;
  buttonShow: boolean = true;
@ViewChildren('listofDivs', { read: TemplateRef }) listToShow!: QueryList<
  ElementRef<HTMLDivElement>
>;
carouselConfig: NguCarouselConfig = {
  grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
  load: 1,
  interval: { timing: 9000, initialDelay: 1000 },
  loop: true,
  touch: true,
  velocity: 0.2,
  point:{
    visible:true,

  }
};
dataSource: any = [];

  constructor(
    public dialog:MatDialog
  ) { }

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

    }, 500);
  }

  openDialog(item) {
    console.log(item,'images')
    const dialogRef = this.dialog.open(GallerydialogComponent,{
      data:item
    }
      );

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}


