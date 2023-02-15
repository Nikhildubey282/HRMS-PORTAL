import { ABS_DIRECTORY, ABS_HOME, ABS_PROFILE } from "./absolute-route"

export const sideNavList = [
  { title: 'Home', logo: 'home', isActiv: true, routerLink:ABS_HOME  },
  { title: 'My Profile', logo: 'person', isActiv: true,routerLink:ABS_PROFILE },
  { title: 'Directory', logo: 'description', isActiv: true,routerLink:ABS_DIRECTORY },
  { title: 'Enterpreneurship Program', logo: 'person', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' },], isActiv: true, },
  { title: 'My Links', logo: 'grid_view', options: [{ subTitle: 'Insurance Verification Details', subLogo: 'checklist' }], isActiv: true, },
  { title: 'Finance', logo: 'payments', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Reviews', logo: 'grid_view', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Refer a Friend', logo: 'groups', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Freshers Training', logo: 'school', options: [{ subTitle: 'Explore', subLogo: 'horizontal_rule' }], isActiv: true, },
  { title: 'Training', logo: 'school', options: [], isActiv: true, },
  { title: 'Assests Inventory', logo: 'science', options: [], isActiv: true, },
  { title: 'Attendance', logo: 'schedule', options: [], isActiv: true, },
  { title: 'Leave', logo: 'calendar_today', options: [], isActiv: true, },
  { title: 'Tickets', logo: 'view_day', options: [], isActiv: true, },
  { title: 'DSR', logo: 'calendar_today', options: [], isActiv: true, },
  { title: 'Projects', logo: 'view_day', isActiv: true, },
  { title: 'Expense', logo: 'monetization_on', isActiv: false, },
  { title: 'Announcements', logo: 'campaign', isActiv: false, },
  { title: 'Travels', logo: 'flight', isActiv: false, },
  { title: 'Logout', logo: 'logout', isActiv: true, },
]


export interface IsideNav {
  title: string,
  logo: string,
  options?: Array<any>
  routerLink?:string
}
