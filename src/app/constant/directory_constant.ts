export const DIRECTORY_EMPLOYEE_DATA: IDIRECTORY_DATA[] = [
  {
    IMAGE: '/assets/images/profile_icon.jpg',
    EMP_NAME: 'Aahan Verma',
    EMP_DESIGNATION: 'Sr. Software Engineer-Android',
    // EMP_TECHNOLOGY: 'Android',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aahan.verma@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '21st Aug',
    // BIRTH_MONTH: 'Aug',
  },
  {
    IMAGE: '/assets/images/profile_icon.jpg',
    EMP_NAME: 'Deepak Yadav',
    EMP_DESIGNATION: 'Software Engineer-Angular ',
    // EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'deepak.yadav@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: ' 08th May',
    // BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/profile_icon.jpg',
    EMP_NAME: 'Nikhil Dubey',
    EMP_DESIGNATION: 'Software Engineer -Angular',
    // EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'nikhil.dubey@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '07th Apr',
    // BIRTH_MONTH: 'Apr',
  },
  {
    IMAGE: '/assets/images/profile_icon.jpg',
    EMP_NAME: 'Harshit Kumar Jain',
    EMP_DESIGNATION: 'Software Engineer-Angular',
    // EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'harshit.jain@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '07th Apr ',
    // BIRTH_MONTH: 'Apr',
  },
  {
    IMAGE: '/assets/images/profile_icon.jpg',
    EMP_NAME: 'Ayush Singh',
    EMP_DESIGNATION: 'Software Engineer-Angular',
    // EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'ayush.singh@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '07th Apr ',
    // BIRTH_MONTH: 'Apr',
  },
]

export interface IDIRECTORY_DATA {
  IMAGE?:string,
  EMP_NAME?:string,
  EMP_DESIGNATION?:string,
  EMP_TECHNOLOGY?:string,
  EMAIL_ICON?:string,
  EMAIL?:string,
  BIRTH_ICON?:string,
  BIRTH_DATE?:string,
  BIRTH_MONTH?:string
}


export const Gallery_DATA :IGALLERYDATA[]=[
  {IMAGE:'/assets/images/award_1672292016846.jpg',HEADING:'Republic Day-2023',NUM:5,BUTTON:'View',
  SUBIMAGE:[
    {IMAGES:'/assets/republic-day/award_1674822366389.jpg'},
    {IMAGES:'/assets/republic-day/award_1674822472652.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822356821.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822361280.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822366389.jpg'}
  ],

},
  {IMAGE:'/assets/images/award_1672292016846.jpg',HEADING:'Best Place To Work Award',NUM:5,BUTTON:'View',
  SUBIMAGE:[
    {IMAGES:'/assets/republic-day/award_1674822366389.jpg'},
    {IMAGES:'/assets/republic-day/award_1674822472652.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822356821.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822361280.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822366389.jpg'}
  ],
},
  {IMAGE:'/assets/images/award_1672292016846.jpg',HEADING:'Christmas Celebration -2022',NUM:5,BUTTON:'View',
  SUBIMAGE:[
    {IMAGES:'/assets/republic-day/award_1674822366389.jpg'},
    {IMAGES:'/assets/republic-day/award_1674822472652.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822356821.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822361280.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822366389.jpg'}
  ],
},
  {IMAGE:'/assets/images/award_1672292016846.jpeg',HEADING:'Diwali Party -2022',NUM:5,BUTTON:'View',
  SUBIMAGE:[
    {IMAGES:'/assets/republic-day/award_1674822366389.jpg'},
    {IMAGES:'/assets/republic-day/award_1674822472652.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822356821.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822361280.jpg'},
    // {IMAGES:'/assets/republic-day/award_1674822366389.jpg'}
  ],
},

]

export interface IGALLERYDATA{
  IMAGE?:string,
  HEADING?:string,
  BUTTON?:string,
  NUM?:number,
  SUBIMAGE?:any

}

