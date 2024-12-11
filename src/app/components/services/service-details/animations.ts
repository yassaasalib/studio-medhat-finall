import { 
  trigger, 
  transition, 
  style, 
  animate, 
  query, 
  stagger 
} from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'translateY(20px)' 
    }),
    animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
      style({ 
        opacity: 1, 
        transform: 'translateY(0)' 
      })
    )
  ])
]);

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('100ms', [
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ], { optional: true })
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ 
      opacity: 0, 
      transform: 'scale(0.95)' 
    }),
    animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', 
      style({ 
        opacity: 1, 
        transform: 'scale(1)' 
      })
    )
  ])
]);