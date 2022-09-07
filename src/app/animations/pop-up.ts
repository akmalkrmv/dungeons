import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const popUp = trigger('pupUp', [
  transition('* => active', [
    style({ position: 'absolute', zIndex: 999 }),
    animate('1s', keyframes([style({ top: '-100px' }), style({ top: '100px' }), style({ top: '-5000px' })])),
  ]),
]);
