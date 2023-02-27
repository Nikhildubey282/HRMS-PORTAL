import { Component, OnInit } from '@angular/core';
import { slideAnimation } from 'src/animation';

@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrls: ['./profilepicture.component.scss'],
  animations:[
    slideAnimation
  ]
})
export class ProfilepictureComponent implements OnInit {
  size:number;
  imagePath:any;
  imgURL:any;
  imageShow:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  preview(files: any) {
    console.log(files,'ll');

    this.size = files[0].size
    if(this.size <= 1000000){

      if (files.length === 0) return;
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);

      reader.onload = (_event) => {
        // let x = reader.result?.toString();
        // let rawData = x?.split(',')?.pop();
        // console.log(rawData,'skwe');
        this.imgURL = reader.result
      };
    }
    this.imageShow=true;

  }

}
