import { ABS_DIRECTORY, ABS_HOME, ABS_PROFILE,ABS_ENTERPRENEUR,ABS_HOLIDAYCALENDAR,ABS_POLICYDOCUMENT,ABS_INSURANCEVERIFICATIONS,ABS_MYPERFORMANCE,ABS_REFERCANDIDATE,ABS_REFERALLIST,ABS_INTERVIEWLIST,ABS_FRESHERTRAINING,ABS_TRAINING,ABS_ONGOINGTRAINING,ABS_MYTRAINING,ABS_REQUESTEDTRAINING, ABS_ASSETSINVENTORY, ABS_REQUESTASSETS, ABS_ASSETSDECLARATIONS } from "./absolute-route"

export const sideNavList = [
  { title: 'Home', logo: 'home', isActiv: true, routerLink:ABS_HOME  },
  { title: 'My Profile', logo: 'person', isActiv: true,routerLink:ABS_PROFILE },
  { title: 'Directory', logo: 'description', isActiv: true,routerLink:ABS_DIRECTORY },
  { title: 'Enterpreneurship Program', logo: 'person', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule',routerLink:ABS_ENTERPRENEUR }], isActiv: true, },
  { title: 'My Links', logo: 'grid_view', options: [{ subTitle: 'Insurance Verification Details', subLogo: 'checklist',routerLink:ABS_INSURANCEVERIFICATIONS },{subTitle: 'holiday calendar', subLogo: 'calendar_today',routerLink:ABS_HOLIDAYCALENDAR},{subTitle: 'Policy Documents', subLogo: 'insert_drive_file',routerLink:ABS_POLICYDOCUMENT}], isActiv: true, },
  { title: 'Finance', logo: 'payments',
  options: [{ subTitle: 'Salary slip', subLogo: 'horizontal_rule',type:'external',link:'https://hrms.easysourceindia.com/Payroll/' },{subTitle: 'Form 16', subLogo: 'horizontal_rule',type:'external',link:'https://hrms.easysourceindia.com/Payroll/'},{subTitle: 'Investment Declaration', subLogo: 'horizontal_rule',link:'https://hrms.easysourceindia.com/Payroll/'},], isActiv: true, },
  { title: 'Reviews', logo: 'grid_view', options: [{ subTitle: 'My performance', subLogo: 'event_available',routerLink:ABS_MYPERFORMANCE }], isActiv: true, },
  { title: 'Refer a Friend', logo: 'groups', options: [{ subTitle: 'Job Opening',subLogo: 'horizontal_rule',routerLink:ABS_REFERCANDIDATE },{subTitle:'Referal List',routerLink:ABS_REFERALLIST,subLogo: 'horizontal_rule'}], isActiv: true, },
  { title: 'Recruitment', logo: 'newspaper', options: [{ subTitle: 'My interview',routerLink:ABS_INTERVIEWLIST,subLogo: 'horizontal_rule' }], isActiv: true, },

  { title: 'Freshers Training', logo: 'school',options: [{ subTitle: 'My Training', subLogo: 'horizontal_rule',routerLink:ABS_FRESHERTRAINING }], isActiv: true, },
  { title: 'Training', logo: 'school',options: [{ subTitle: 'Upcoming Training',subLogo: 'horizontal_rule',routerLink:ABS_TRAINING },{ subTitle: 'Ongoing Training',subLogo: 'horizontal_rule',routerLink:ABS_ONGOINGTRAINING },{ subTitle: 'My Training',subLogo: 'horizontal_rule',routerLink:ABS_MYTRAINING },{ subTitle: 'Requested Training',subLogo: 'horizontal_rule',routerLink:ABS_REQUESTEDTRAINING  }], isActiv: true, },
  { title: 'Assests Inventory', logo: 'science', options: [{ subTitle: 'My Assets inventory',subLogo: 'computer',routerLink:ABS_ASSETSINVENTORY },{ subTitle: 'Assets Request',subLogo: 'flight_takeoff',routerLink:ABS_REQUESTASSETS },{ subTitle: 'Assets Declarations',subLogo: 'arrow_drop_down_circle',routerLink:ABS_ASSETSDECLARATIONS }], isActiv: true, },
  { title: 'Attendance', logo: 'schedule', options: [{ subTitle: 'Attendance Calendar',subLogo: 'horizontal_rule',routerLink:ABS_ASSETSINVENTORY },{ subTitle: 'Manual Punch',subLogo: 'horizontal_rule',routerLink:ABS_ASSETSINVENTORY },{ subTitle: 'Punch Log',subLogo: 'horizontal_rule',routerLink:ABS_ASSETSINVENTORY }], isActiv: true, },
  { title: 'Leave', logo: 'calendar_today', routerLink:'hweiuewiuieu',options: [], isActiv: true, },
  { title: 'Tickets', logo: 'view_day',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'DSR', logo: 'calendar_today',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'Projects', logo: 'view_day',routerLink:'hweiuewiuieu', isActiv: true, },
  { title: 'Expense', logo: 'monetization_on', routerLink:'hweiuewiuieu',isActiv: false, },
  { title: 'Announcements', logo: 'campaign',routerLink:'hweiuewiuieu', isActiv: false, },
  { title: 'Travels', logo: 'flight',routerLink:'hweiuewiuieu', isActiv: false, },
  { title: 'Logout', logo: 'logout',routerLink:'hweiuewiuieu', isActiv: true, },
]


export interface IsideNav {
  title: string,
  logo: string,
  options?: Array<any>
  routerLink?:string
}
