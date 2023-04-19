import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodDataService } from '../service/food-data.service';

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

  constructor(private _formBuilder:FormBuilder,private _router:Router,private _foodCalendarService:FoodDataService) { }
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
    // this._dialog.open(CouponsHistoryComponent,config);
  }



}
