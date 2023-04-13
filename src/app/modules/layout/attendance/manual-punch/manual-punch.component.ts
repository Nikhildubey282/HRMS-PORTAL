import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manual-punch',
  templateUrl: './manual-punch.component.html',
  styleUrls: ['./manual-punch.component.scss']
})
export class ManualPunchComponent implements OnInit {

  companyLabel='Company';
  companyData=['Appinventiv',];

  manualForm!:FormGroup;

  dataSource = new MatTableDataSource<any>();

  heading = [
    {heading:'Edit',},
    {heading:'Manual Punch Date'},
    {heading:'In Time'},
    {heading:'Out Time'}
  ]
  Table_DATA: any[] = [

  ];

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.createForm();
  }

  createForm(){
    this.manualForm=this._fb.group({
      company:['']

    })
  }

}
