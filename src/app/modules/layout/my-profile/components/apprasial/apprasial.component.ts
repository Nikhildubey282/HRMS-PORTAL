import { animate, animation, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { slideAnimation } from 'src/animation';
import { APPRASIAL_MESSGAES } from 'src/app/constant/messages';

@Component({
  selector: 'app-apprasial',
  templateUrl: './apprasial.component.html',
  styleUrls: ['./apprasial.component.scss'],
  animations:[
    slideAnimation
  ]

})
export class ApprasialComponent implements OnInit {

  apprasialForm!:FormGroup;
  errorMsg=APPRASIAL_MESSGAES;

  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'S.No', key:'sNo',type:'text'},
    { heading: 'First Name', key: 'fName', type: 'link', link: '/dashboard/client-details' },
    { heading: 'Middle Name', key:'mName',type:'text'},
    { heading: 'Last Name', key:'lName',type:'text'},
    { heading: 'Email Address', key:'email',type:'text'},
    { heading: 'Phone', key:'phone',type:'text'},
    { heading: 'Registered On', key:'registerOn',type:'text'},
  ]
  Table_DATA: any[] = [
    {'sNo': 1, 'fName': 'abc','mName':'kumar','lName': 'qwe', 'email': 'H@gmail.com', 'phone':132423534654,'registerOn':110044},
    {'sNo': 2, 'fName': 'lkj','mName':'kumar','lName': 'sii', 'email': 'He@gmail.com','phone':132423534654,'registerOn':110044},
    {'sNo': 3, 'fName': 'xyz','mName':'kumar','lName': 'sii', 'email': 'Li@gmail.com','phone':132423534654,'registerOn':110044},
    {'sNo': 4, 'fName': 'efg','mName':'kumar','lName': 'sii', 'email': 'Be@gmail.com','phone':132423534654,'registerOn':110044},
  ];
  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createform();
    this.apprasialForm.controls['apprasialCycle'].disable()
    this.apprasialForm.controls['apprasialMonth'].disable()


  }

  createform(){

    this.apprasialForm=this._fb.group({
      apprasialCycle:['',[Validators.required]],
      apprasialMonth:['',[Validators.required]]

    })

  }
  get formCtrl(){
    return this.apprasialForm.controls;
  }

}
