import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ABS_MYPITCH } from 'src/app/constant/absolute-route';
import { myPitchDataSelector } from 'src/app/shared_store/selector';

@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss']
})
export class MyPitchComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();



  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Title', key:'title',type:'text'},
    { heading: 'Industry', key:'industry',type:'text'},
    {heading:'Technical / Non-Technical',key:'technical',type:'text'},
    {heading:	'Submitted On',key:'date',type:'text'},
    {heading:'Action',key:'action',type:'text'},
  ]
  Table_DATA: any[] = [

  ];

  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.get_data();
  }

  get_data(){
    console.log("my pitch initiated");

    this.store.select(myPitchDataSelector).subscribe((data:any)=>{

      console.log(data,'shivvvvvvvvvvvvv');
      this.Table_DATA.push(data);
    this.dataSource = new MatTableDataSource<any>(data);




    }
    )
  }

}
