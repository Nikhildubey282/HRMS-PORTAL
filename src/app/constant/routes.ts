export const ACCOUNT = 'account';
export const LOGIN = 'login';
export const FORGOT_PASSWORD = 'forget-password';
export const RESET_PASSWORD = 'reset-password';
export const RECOVERY_EMAIL = 'recovery-email-sent';
export const VERIFY_OTP = 'verify-otp';
export const ADD = 'add';
export const EDIT = 'edit';
export const DETAILS = 'details';
export const LAYOUT ='layout';
export const HOME ='dashboard';
export const PROFILE='profile';
export const BASICINFO='basic-info';
export const APPRASIAL='apprasial';
export const CHANGE_PASSWORD = 'change-password';
export const PROFILE_PICTURE ='profilepicture';
export const QUALIFICATION ='qualification';
export const DIRECTORY='directory';



export const NOT_FOUND ='not-found'



export const ADMIN_MANAGMENT = 'admin-managment'

// @Dashboard_routes

export const DASHBOARD = 'content';
export const USER_MANAGMENT ='user-managment'

export interface TableColumn {
  heading: string;
  key: string;
  sort?: boolean;
  type: string;
  link:string
  align?: 'right' | 'left' | 'center';
}
