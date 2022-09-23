import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { IDungeonsAnimationMetadata } from './dungeons-animation-metadata';

const DICE_ENTER = 'DICE_ENTER';
export const DICE_ENTER_ANIMATION: IDungeonsAnimationMetadata = {
  NAME: DICE_ENTER,
  TRIGGER_NAME: `@${DICE_ENTER}`,
  START: `@${DICE_ENTER}.start`,
  DONE: `@${DICE_ENTER}.done`,
  TRIGGER: trigger(DICE_ENTER, [
    transition('* => active', [
      style({ position: 'relative', zIndex: 999, translate: '0 100vh' }),
      animate('400ms', style({ translate: '0 -1vh' })),
      animate('200ms', style({ translate: '0' })),
    ]),
    transition('* => inverse', [
      style({ position: 'relative', zIndex: 999, translate: '0 -100vh' }),
      animate('400ms', style({ translate: '0 1vh' })),
      animate('200ms', style({ translate: '0' })),
    ]),
  ]),
};
