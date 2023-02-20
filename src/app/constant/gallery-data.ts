export const Gallery_DATA: IGALLERYDATA[] = [
  {
    IMAGE: '/assets/gallery/award_1674822333816.jpg',
    HEADING: 'Republic Day-2023',
    NUM: 2,
    BUTTON: 'View',
    SUBIMAGE:[
      {IMAGES:'/assets/republic-day/award_1674822366389.jpg'},
      {IMAGES:'/assets/republic-day/award_1674822472652.jpg'},
      // {IMAGES:'/assets/republic-day/award_1674822356821.jpg'},
      // {IMAGES:'/assets/republic-day/award_1674822361280.jpg'},
      // {IMAGES:'/assets/republic-day/award_1674822366389.jpg'}
    ]
  },
  {
    IMAGE: '/assets/gallery/award_1672378171227.jpg',
    HEADING: 'Best Place To Work Award',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE:[
      {IMAGES:'/assets/best-place/award_1672378171227.jpg'},
      {IMAGES:'/assets/best-place/award_1672378174176.jpeg'},
      {IMAGES:'/assets/best-place/award_1672378175316.jpg'},
      {IMAGES:'/assets/best-place/award_1672378183848.jpeg'},
    ]
  },
  {
    IMAGE: '/assets/gallery/award_1672292016846.jpg',
    HEADING: 'Christmas Celebration -2022',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE:[
      {IMAGES:'/assets/christmas/award_167229202066.jpg'},
      {IMAGES:'/assets/christmas/award_1672292028335.jpg'},
      {IMAGES:'/assets/christmas/award_1672292037579.jpg'},
      {IMAGES:'/assets/christmas/award_1672292037704.jpg'}
    ]
  },
  {
    IMAGE: '/assets/gallery/award_166719426194.jpeg',
    HEADING: 'Diwali Party -2022',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE:[
      {IMAGES:'/assets/diwali/award_1667194276825.jpeg'},
      {IMAGES:'/assets/diwali/award_1667194285355.jpeg'},
      {IMAGES:'/assets/diwali/award_1672292329158.jpg'},
      {IMAGES:'/assets/diwali/award_1672292333107.jpg'},
    ]
  },
];

export interface IGALLERYDATA{
  IMAGE?:string,
  HEADING?:string,
  BUTTON?:string,
  NUM?:number,
  SUBIMAGE?:Array<any>
}
