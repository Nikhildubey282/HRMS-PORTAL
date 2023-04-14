import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  departmentLabel='Department';
  statusLabel='Status';
  departmentData=['All','Angular','React','Blockchain','Node JS','Andorid'];
  statusData=['All','Selected','Rejected','Missed','In Progess'];
  data:any;
  dataStatus:any;

  interviewForm!:FormGroup;


  heading = [
    { heading: 'S.no', key:'sNo',type:'text'},
    { heading: 'Department', key: 'department', type: 'text' },
    { heading: 'Name', key:'name',type:'text'},
    { heading: 'Email', key:'email',type:'text'},
    {heading:'Mobile No.',key:'mobile',type:'text'},
    {heading:'Round Type',key:'roundtype',type:'text'},
    {heading:'Interview Date',type:'text',key:'interviewdate'},
    {heading:'Interview Time',type:'text',key:'interviewtime'},
    {heading:'Final Status',type:'text',key:'status'},
    // {heading:'Action',type:'text'}

  ]
  Table_DATA: any[] = [
    {sNo:'1',department:'Angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 1',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'2',department:'React',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 3',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'In Progess'},
    {sNo:'3',department:'Angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 1',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'4',department:'Angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 2',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'5',department:'Node JS',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'round 2',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'Rejected'},
    {sNo:'6',department:'Angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 3',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'7',department:'Angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 3',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'selected'},
    {sNo:'8',department:'Angular',name:'Nikhil Dubey',email:'nikhildubey@gmail.com',mobile:'9634821432',roundtype:'Round 1',interviewdate:'22/03/2023',interviewtime:'2:00 pm',status:'Rejected'},

  ];

  constructor( private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();
  }

  createForm(){
    this.interviewForm=this._fb.group({
      department:['',],
      status:['']

    })
  }

  filter(e:any){
    console.log(e);
    if(e.value==='All'){
      this.data=this.Table_DATA
      console.log(this.data)
    }
    else{
    this.data=this.Table_DATA;
    this.data=this.Table_DATA.filter(item => item.department===e.value);
    }
    this.dataSource = new MatTableDataSource<any>(this.data);


    // console.log(this.Table_DATA.department);

    console.log(this.data);
  }
  statusFilter(e:any){
    console.log(e);
    if(e.value==='All'){
      this.dataStatus=this.data
      console.log(this.dataSource)
    }
    else{
    this.dataStatus=this.data;
    this.dataStatus=this.data.filter(item => item.status===e.value);
    }
    this.dataSource = new MatTableDataSource<any>(this.dataStatus);

    console.log(this.dataSource.data)


  }



}
