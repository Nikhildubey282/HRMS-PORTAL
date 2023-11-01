import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { slideAnimation } from 'src/animation';
import { profileAction } from 'src/app/shared_store/actions';
import { imageSelector } from 'src/app/shared_store/selector';

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
  profileSource='../../../../../../assets/images/profile_icon.jpg';
  mainImage:any;

  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
    this.store.select(imageSelector).subscribe((data:any)=>{
      this.mainImage = data;
    })
  }

  preview(files: any) {
    console.log(files,'ll');

    this.size = files[0].size
    if(this.size <= 1000000){
      console.log(this.size)

      if (files.length === 0) return;
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);

      reader.onload = (_event) => {
        this.imgURL = reader.result
      };
    }
    this.imageShow=true;

  }

  submit(){
    this.store.dispatch(profileAction({data:this.imgURL}));
    this.imageShow=true;

  }

  crossClick(){
    this.store.dispatch(profileAction({data:this.profileSource}));
    this.imageShow=false;

  }

}
