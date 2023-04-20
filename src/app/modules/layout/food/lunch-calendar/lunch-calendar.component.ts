import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-lunch-calendar',
  templateUrl: './lunch-calendar.component.html',
  styleUrls: ['./lunch-calendar.component.scss']
})
export class LunchCalendarComponent implements OnInit {
  @Input() myCalendar:any;
  @Input() options:any;
  @Output() calendarData = new EventEmitter<any>();

  constructor(private snackbar:SnackBarService) { }

  ngOnInit(): void {
  }

  week = [
    {
      value:0,
      viewValue:'Mon'
    },
    {
      value:1,
      viewValue:'Tue'
    },
    {
      value:2,
      viewValue:'Wed'
    },
    {
      value:3,
      viewValue:'Thu'
    },
    {
      value:4,
      viewValue:'Fri'
    },
    {
      value:5,
      viewValue:'Sat'
    },
    {
      value:6,
      viewValue:'Sun'
    }
  ]

  isLocked(day:any):boolean{
    let d = new Date()
    if(day.date <= d.getDate()){
       return true;
    }else{
       return false
    }
  }



  showChecked(day : any):boolean{
    // console.log(couponPurchased,"CPP");
    let d = new Date()
    if(day.couponPurchased === false && day.date >d.getDate()){
      return true;
    }else {
      return false;
    }
  }

  onChangeCheckBox(event:any,i:any,day:any){
    // console.log(event,'----',i,'----',day);

     this.myCalendar[i].map((item:any)=>{
       if(item.date == day.date){
         if(event.checked){
           item.booked = true
         }else{
          item.booked = false;
         }
       }
     })

    this.calendarData.emit(this.myCalendar);
  }

  cancelCoupon(i:number,day:any){
    console.log(i,'----',day);
    this.myCalendar[i].map((item:any)=>{
      if(item.date == day.date){
        item.couponPurchased = false;
        item.booked = false;
      }
    })
    this.snackbar.showSuccess('Coupon cancel sucessfully !!','')

    this.calendarData.emit(this.myCalendar);
  }

  selectAll(data:any){



    this.myCalendar.map((week:any)=>{
      week.map((day:any)=>{
        if(day.hasOwnProperty('booked')){
          console.log(day,"DAY");

          if(data.checked == true){
            console.log('9090()()(');

            day.booked = true
          }else{
            day.booked = false;
          }
        }
      })
    })

    this.calendarData.emit(this.myCalendar);



  }

}
