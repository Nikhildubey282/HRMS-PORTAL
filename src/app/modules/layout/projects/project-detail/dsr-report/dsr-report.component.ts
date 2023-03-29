import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsr-report',
  templateUrl: './dsr-report.component.html',
  styleUrls: ['./dsr-report.component.scss']
})
export class DsrReportComponent implements OnInit {
  labelDepartment='Department';
  labelResource='All Resource';
  projectData=['Angular','React','Node js','Sales']
  dsrAnalysis=['Total DSR Submitted','Total DSR Pending Apporval','Total DSR Approved','Total DSR Rejected','Pending AM Approvals','Pending PM Approvals','Pending RM Approvals']

  constructor() { }

  ngOnInit(): void {
  }

}
