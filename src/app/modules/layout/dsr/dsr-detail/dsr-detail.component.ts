import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dsr-detail',
  templateUrl: './dsr-detail.component.html',
  styleUrls: ['./dsr-detail.component.scss']
})
export class DsrDetailComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();


  heading = [
    { heading: "Sr.No.", key: 's_no', type: 'text', },
    { heading: "Project Name", key: 'project_name', type: 'text' },
    { heading: "Dsr", key: 'dsr', type: 'HTML' },
    { heading: "Status", key: 'status', type: 'text', },
    { heading: "PM Approval", key: 'pm_approval',type: 'text' },
    { heading: "AM Approval", key: 'am_approval', type: 'text', },
    { heading: 'RM Approval	', key: 'rm_approval', type: 'text',},
    { heading: 'Final Approval', key: 'final_approval', type: 'text' },
    { heading: 'Logged Hrs', key: 'login_hrs', type: 'text' },
    { heading: 'Action', key: 'action', type: 'link',action:[3]},



  ]
  Table_DATA: any[] = [
    {s_no:'1',project_name:'React Js',dsr:'<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Meeting and discussion :</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">NA</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Task worked today</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Work on diectory module [10:15 AM to 12:30 PM] - [done]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Work on enterpreure modules with validation and routing [12:30 PM to 02:00 PM] - [done]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Work on toastr service and animations [05:00 PM to 07:05 PM] - [ongoing]</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">Challenges if any</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">&nbsp;</p>\n<p style=\"box-sizing: border-box; margin: 0px 0px 1rem; padding: 0px; border: 0px; font-family: Lato; font-size: 14px; background-color: #ffffff;\">NA</p>',
status:'Submiited',pm_approval:'N/A',am_approval:'N/A',rm_approval:'N/A',final_approval:'N/A',login_hrs:'8:30'
  }

  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

}
