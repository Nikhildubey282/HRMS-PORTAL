import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TRAINING } from 'src/app/constant/constant';

@Component({
  selector: 'app-details-training',
  templateUrl: './details-training.component.html',
  styleUrls: ['./details-training.component.scss']
})
export class DetailsTrainingComponent implements OnInit {
  data:any[]=TRAINING;

  detailId
  trainingDetailData;

  constructor(private _activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id')
    console.log(this.detailId,'detail');
    this.trainingDetailData= this.data.find(x => x.id ==this.detailId)
    console.log(this.trainingDetailData,'index')
  }

}
