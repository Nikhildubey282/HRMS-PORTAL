import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


export const slideAnimation=
  trigger('slideinOut',[
    transition(':enter',[
      style({transform:'translateX(100%)','opacity' : 1}),
      animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
    ])
  ])


