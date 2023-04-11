export const ACCOUNT_ERROR_MESSAGES = {
  NAME_REQ: 'Please enter name',
  FIRST_NAME_REQ: 'Please enter first name',
  LAST_NAME_REQ: 'Please enter last name',
  MIN_NAME_REQ: 'Please enter atleast 3 characters',
  MOBILE_REQ: 'Please enter phone number',
  INVALID_MOBILE: 'Please enter a valid phone number',
  PHONE_NUMBER: 'Please enter only numbers and 10 digits',
  PASSWORD_REQ: 'Please enter password',
  // INVALID_PASSWORD:
  //   'Password must contain at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum 8 and maximum 16 characters',
  INVALID_PASSWORD:
     'Password must,minimum 8 and maximum 16 characters',
  NO_SPACE_PASSWORD: "Password can't start or end with a blank space",
  EMAIL_REQ: 'Please enter email address',
  INVALID__EMAIL: 'Please enter a valid email address',
  INVALID_EMAIL: 'Invalid credentials',
  ONLY_ALPHABET: 'Only alphabets are allowed',
  INVALID_EMAIL_PASS: 'Invalid credentials',
  INVALID_NAME:'Invalid Name.',
  INVALID_CONTACT: 'Invalid Contact Number.',
  INVALID_COMPANY: 'Invalid Company Name',
  INVALID_BUSINESS_NAME: 'INVALID BUSINESS NAME.',
  PROFILE_PIC:'Profile picture is required.',
  FIRST_NAME:'Incorrect first name',
  LAST_NAME:'Incorrect last name',
  FULL_NAME:'Invalid full name',
  ADDUSER_EMAIL:'Invalid Email address'

};

export const VALIDATION_MESSAGES = {
  "confirm password": {
    matchPassword: "Confirm password does not matches with password",
  },
};
export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const QUALIFICATION_MESSAGE={
  UNIVERSITY_REQUIRED:'Please Enter a university name',
  EDUCATION_LEVEL:'Please choose a education level',
  LANGUAGE:'Please choose Language',
  PROFESSIONAL_REQUIRED:'Please Enter a Professional Course name',
  DESCRIPITION_REQUIRED:'Please Enter a Descripition'

}

export const BASIC_INFO_MESSAGE={
  FIRSTNAME_REQUIRED:'Please Enter a first name',
  YEARS_REQUIRED:'Please Enter a years',
  MONTHS_REQUIRED:'Please Enter a months'

}

export const APPRASIAL_MESSGAES={
  APPRASIALCYCLE_REQUIRED:'Please Enter a Apprasial Cycle',
  APPRASIALMONTH_REQUIRED:'Please Enter a Apprasial Month'

}
