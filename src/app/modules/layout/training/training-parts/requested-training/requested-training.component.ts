import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { requestTrainingDataSelector } from 'src/app/shared_store/selector';

@Component({
  selector: 'app-requested-training',
  templateUrl: './requested-training.component.html',
  styleUrls: ['./requested-training.component.scss']
})
export class RequestedTrainingComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Training Name', key:'trainingname',type:'text'},
    { heading: 'Timeline to conduct', key:'timeline',type:'text'},
    {heading:'Requested date.',key:'date',type:'text'},
    {heading:	'Status',key:'status',type:'text'},
    {heading:'Action',type:'text',key:'action'},


  ]
  Table_DATA: any[] = [

  ];

  constructor(
    private store : Store
  ) { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.store.select(requestTrainingDataSelector).subscribe((data:any)=>{
      // console.log(data,'harrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
      this.Table_DATA.push(data);
    this.dataSource = new MatTableDataSource<any>(data);

      console.log(this.Table_DATA);


    }
    )
  }

}
