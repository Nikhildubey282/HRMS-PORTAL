import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ABS_REFERCANDIDATE } from 'src/app/constant/absolute-route';
import { getReferFriendDataSelector } from 'src/app/shared_store/selector';

@Component({
  selector: 'app-referal-list',
  templateUrl: './referal-list.component.html',
  styleUrls: ['./referal-list.component.scss']
})
export class ReferalListComponent implements OnInit {
  jobOpening=ABS_REFERCANDIDATE

  constructor(
    private store:Store
  ) {

   }

  ngOnInit(): void {

    this.store.select(getReferFriendDataSelector).subscribe((data:any)=>
    {
      console.log(data);
    }
    )
  }

}
