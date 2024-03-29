import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MYTRAINING } from 'src/app/constant/constant';
import { FeedbackComponent } from './dialog-component/feedback/feedback.component';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {



  constructor(private _activatedRoute:ActivatedRoute,
    private _route:Router

    ) { }

  // ngOnInit(): void {
  // }
  data:any[]=MYTRAINING;

  detailId
  trainingDetailData


  ngOnInit(): void {
    // this.title.setTitle(TITLE.training_details)
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.detailId,'detail');
    this.trainingDetailData= this.data.find(x => x.id ==this.detailId)
    console.log(this.trainingDetailData,'index')
  }

  navigate_to_home(){
    this._route.navigate(['./layout'])
  }




}
