import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { imageSelector } from 'src/app/shared_store/selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profileSource:any;

  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {

    this.store.select(imageSelector).subscribe((data:any)=>
    {
      this.profileSource = data;
    }
    )
  }

}
