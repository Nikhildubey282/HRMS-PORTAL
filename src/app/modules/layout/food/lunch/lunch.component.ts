import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { foodSelector } from 'src/app/shared_store/selector';
import { FoodDataService } from '../service/food-data.service';
import { DetailsComponent } from './dialog-components/details/details.component';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {

  showTable = false;
  myCalendar = [];
  options = {
    edit:false,
    cancel:true
  }
  monthNames:any;
  totalAmount:any;

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _foodCalendarService:FoodDataService,private _dialog:MatDialog,private store:Store) { }
  couponForm!:FormGroup;



  ngOnInit(): void {

    if(this._foodCalendarService.myCalendar.length == 0){
      console.log("new Formation");
      this._foodCalendarService.createCalendarData()
      this.myCalendar = this._foodCalendarService.myCalendar
    }else{
      this.myCalendar = this._foodCalendarService.myCalendar
      console.log('usingOld');
    }

    console.log(this._foodCalendarService.myCalendar,"9999");
    this.getMonths();
    this.store.select(foodSelector).subscribe((data:any)=>
    {
      this.totalAmount=data;

    }
    )

  }


  purchaseCoupons(){
    this._router.navigate(['layout/food/purchase-coupons'])
  }
  updateCalendarData(data:any){

    console.log(data,"JUMPKAR2");
    this.myCalendar = data;
    this._foodCalendarService.myCalendar = data

  }

  viewDetails(){
    let config = {
      minWidth:'29rem',
      data:'',
      minHeight:'50vh',
      panelClass:'app-full-bleed-dialog'
    }
    this._dialog.open(DetailsComponent,config);
  }

  getMonths() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    this.monthNames = monthNames[d.getMonth()];
    console.log(this.monthNames);


  }



}
