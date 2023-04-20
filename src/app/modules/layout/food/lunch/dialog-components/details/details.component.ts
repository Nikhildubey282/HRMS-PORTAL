import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tableHeading = [
    'Transaction Date', 'Coupon Date', 'Transaction Type', 'Amount'
  ]

  tableData = [
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Cancelled',
      amount:'-25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Purchased',
      amount:'+25'
    },
    {
      transaction_date:'20-03-2022',
      coupon_date:'20-03-2022',
      transaction_type:'Coupon Cancelled',
      amount:'-25'
    }
  ]

}
