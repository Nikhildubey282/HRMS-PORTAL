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
export const ENTERPRENEUR='enterpreneurship';
export const SHAREIDEAS='add_pitch';
export const HOLIDAYCALENDAR='holiday-calendar';
export const POLICYDOCUMENT='policy-document';
export const INSURANCEVERIFICATION='insurance-verification';
export const REVIEWS='reviews';
export const MYPERFORMANCE='my-performance';
export const REFERCANDIDATE='refer-candidate';
export const JOBOPENING='job-opening';
export const REFERALLIST='referal-list';
export const INTERVIEW='interview';
export const INTERVIEWLIST='interview-list';
export const FRESHERS='freshers';
export const MYTRAINING='mytrainings';
export const TRAINING='training';
export const UPCOMINGTRAINING='upcoming-training';
export const ONGOINGTRAINING='ongoing-training';
export const DEPARTMENTTRAINING='my-training';
export const REQUESTEDTRAINING='requested-training';
export const ASSETSINVENTORY='assets-inventory';
export const MYASSETS='my-assets';
export const ASSETSREQUEST='assets-request';
export const ASSETSDECLARATION='assets-declarations';




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
