import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MYTRAINING } from 'src/app/constant/constant';

@Component({
  selector: 'app-mytraining',
  templateUrl: './mytraining.component.html',
  styleUrls: ['./mytraining.component.scss']
})
export class MytrainingComponent implements OnInit {
  data:any[]=MYTRAINING;
  // card:any[]=[1,2]

  constructor(
    private route:Router,
  ) { }

  ngOnInit(): void {

  }

  viewDetails(item){
    console.log('jkdddddd')
    // this.route.navigate(['layout/freshers/training-details']);
      console.log(item,'item');
      const url = this.route.serializeUrl(
        this.route.createUrlTree([`/layout/freshers/training-details/${item.id}`])
      );
      window.open(url, '_blank');
    }
  }


