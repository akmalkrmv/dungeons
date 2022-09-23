import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { IDungeonsAnimationMetadata } from './dungeons-animation-metadata';

const DICE_LIST_ENTER = 'DICE_ENTER';
export const DICE_LIST_ENTER_ANIMATION: IDungeonsAnimationMetadata = {
  NAME: DICE_LIST_ENTER,
  TRIGGER_NAME: `@${DICE_LIST_ENTER}`,
  START: `@${DICE_LIST_ENTER}.start`,
  DONE: `@${DICE_LIST_ENTER}.done`,
  TRIGGER: trigger(DICE_LIST_ENTER, [
    transition('* => active', [
      query(':enter', [
        style({ position: 'relative', zIndex: 999, translate: '0 100vh' }),
        stagger(100, [animate('500ms', style({ translate: '0 -1vh' })), animate('200ms', style({ translate: '0' }))]),
      ]),
    ]),
    transition('* => inverse', [
      query(':enter', [
        style({ position: 'relative', zIndex: 999, translate: '0 -100vh' }),
        stagger(100, [animate('500ms', style({ translate: '0 1vh' })), animate('200ms', style({ translate: '0' }))]),
      ]),
    ]),
  ]),
};
