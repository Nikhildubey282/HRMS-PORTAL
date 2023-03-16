import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-policy-document',
  templateUrl: './policy-document.component.html',
  styleUrls: ['./policy-document.component.scss']
})
export class PolicyDocumentComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();

  heading = [
    {heading:'#',key:'sNo',type:'text'},
    { heading: 'Name', key:'name',type:'text_with_icon'},
    { heading: 'Type', key: 'doctype', type: 'text'},
    { heading: 'File size  ', key:'size',type:'text'},
    { heading: 'Last Modified', key:'date',type:'text'},
    {heading:'Action',key:'download',type:'download'}
  ]
  Table_DATA: any[] = [
    {sNo:1,'name':'Appinventiv_policy_manual','doctype':'pdf','size':'345kb','date':'23-01-2022',download:'download',link:'/assests/policy documents/Policy_Manual.pdf',icon:'picture_as_pdf' },
    {'sNo':2,'name':'Appinventiv_Conatct_List','doctype':'pdf','size':'234.5kb','date':'15-07-2022',download:'download',link:'/assets/policy documents/ContactList.pdf',icon:'picture_as_pdf' },
    {'sNo':3,'name':'Holiday Calendar','doctype':'jpg','size':'456.7kb','date':'25-07-2022',download:'download',link:'https://dashboard.appinventiv.com/admin/repository/file-download?file=uploads/hr/policy/Holiday-Calendar-2023.jpg',icon:'insert_photo' },
    {'sNo':4,'name':'Employee refer policy','doctype':'pdf','size':'345kb','date':'25-07-2022',download:'download',link:'/assets/policy documents/Employee Referral Policy.pdf',icon:'picture_as_pdf' },
    {'sNo':5,'name':'Leave Policy','doctype':'pdf','size':'175kb','date':'25-07-2022',download:'download',link:'/assets/policy documents/LeavePolicy.pdf',icon:'picture_as_pdf' },
    {'sNo':6,'name':'Sexual Harassment','doctype':'pdf','size':'375kb','date':'25-07-2022',download:'download',link:'/assets/policy documents/SexualHarassment.pdf',icon:'picture_as_pdf' }

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
  }

}
