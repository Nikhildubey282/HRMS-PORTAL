import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dsr-report',
  templateUrl: './dsr-report.component.html',
  styleUrls: ['./dsr-report.component.scss']
})
export class DsrReportComponent implements OnInit {
  labelDepartment='Department';
  labelResource='Project Resource';
  labelSubmission='Submission Status';
  labelpmApproval='PM Approval Status';
  labelamApproval='AM Approval Status';
  labelrmApproval='RM Approval Status';
  labelfinalApproval='Final Approval Status';
  labelHours='Hours';
  resourceData=['All','Nikhil Dubey','Shiva','Harshit'];
  submissionData=['All','Submitted','Due'];
  approval=['All','Pending','Rejected','Approved'];
  hours=['Hours','less than 5 hours']
  projectData=['All','Angular','React','Node js','Sales']
  dsrAnalysis=['Total DSR Submitted','Total DSR Pending Apporval','Total DSR Approved','Total DSR Rejected','Pending AM Approvals','Pending PM Approvals','Pending RM Approvals']
  dsrreportForm!:FormGroup;

  constructor(
    private _fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.dsrreportForm=this._fb.group({
      dateFrom:[''],
      dateTo:[''],
      department:[''],
      projectResource:[''],
      submissionStatus:[''],
      pmApproval:[''],
      amApproval:[''],
      rmApproval:[''],
      finalApproval:[''],
      hours:['']
    })
  }

  get formCtrl(){
    return this.dsrreportForm.controls;
  }

}
