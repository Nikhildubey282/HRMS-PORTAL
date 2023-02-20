import { ABS_DIRECTORY, ABS_HOME, ABS_PROFILE,ABS_ENTERPRENEUR } from "./absolute-route"

export const sideNavList = [
  { title: 'Home', logo: 'home', isActiv: true, routerLink:ABS_HOME  },
  { title: 'My Profile', logo: 'person', isActiv: true,routerLink:ABS_PROFILE },
  { title: 'Directory', logo: 'description', isActiv: true,routerLink:ABS_DIRECTORY },
  { title: 'Enterpreneurship Program', logo: 'person', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule',routerLink:ABS_ENTERPRENEUR }], isActiv: true, },
  { title: 'My Links', logo: 'grid_view',routerLink:'hweiuewiuieu', options: [{ subTitle: 'Insurance Verification Details', subLogo: 'checklist' }], isActiv: true, },
  { title: 'Finance', logo: 'payments',routerLink:'hweiuewiuieu', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Reviews', logo: 'grid_view', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Refer a Friend', logo: 'groups',routerLink:'hweiuewiuieu', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Freshers Training', logo: 'school', routerLink:'hweiuewiuieu',options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Training', logo: 'school',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'Assests Inventory', logo: 'science',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
  { title: 'Attendance', logo: 'schedule',routerLink:'hweiuewiuieu', options: [], isActiv: true, },
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
