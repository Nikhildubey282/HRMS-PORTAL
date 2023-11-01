import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { foodAction } from 'src/app/shared_store/actions';
import { FoodDataService } from '../service/food-data.service';

@Component({
  selector: 'app-purchase-coupons',
  templateUrl: './purchase-coupons.component.html',
  styleUrls: ['./purchase-coupons.component.scss']
})
export class PurchaseCouponsComponent implements OnInit {
  couponForm!:FormGroup;

  myCalendar = [];
  updatedCalendar = [];
  options = {
    edit:true,
    cancel:false,
    select:true
  }
  totalAmount:any;

  constructor(private _foodCalendarService:FoodDataService,private route:Router,private _formBuilder:FormBuilder,private snackbar:SnackBarService,private store:Store


     ) { }

  ngOnInit(): void {
    console.log(this.totalAmount)

    this.myCalendar = this._foodCalendarService.myCalendar
    if(this.myCalendar.length == 0){
      this.route.navigate(['layout/food'])
    }

    this.createForm()
    this.couponForm.get('coupon_count')?.disable();
    this.couponForm.get('total_amount')?.disable();
    // this.store.dispatch(foodAction(this.))
  }


  createForm(){
    this.couponForm = this._formBuilder.group({
      coupon_count: [''],
      total_amount:['']
    })
  }


  buyCoupons(){
    this.myCalendar.map((week:any)=> {
      week.map((day:any)=>{
        if(day.booked == true){
          day.couponPurchased = true;
        }
      })
    })
    this.snackbar.showSuccess('Coupons Bought Sucessfully','')
    this.route.navigate(['layout/food'])

      // console.log(this.myCalendar,"myCalendar");
    this._foodCalendarService.myCalendar = this.myCalendar
    this.store.dispatch(foodAction(this.couponForm.value))


  }


  updateCalendarData(data:any){
    // console.log(data,"CD");
    let couponCount = 0;
    data.map((week:any)=>{
      week.map((day:any)=>{
        if(day.booked == true){
          couponCount++;
        }
      })
    })
    // console.log(count,"cuddliest");
    this.updatedCalendar = data;
    this.couponForm.get('coupon_count')?.setValue(couponCount);
    this.couponForm.get('total_amount')?.setValue(couponCount * 25);
    this.totalAmount=this.couponForm.controls.total_amount.value;

  }

  selectAll(){

  }
  cancelCoupons(){
    this.route.navigate(['layout/food'])
  }

}
