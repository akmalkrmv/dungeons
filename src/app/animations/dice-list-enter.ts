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
        style({ position: 'relative', zIndex: 999, translate: '0 110vh' }),
        stagger(100, [animate('600ms', style({ translate: '0 -2vh' })), animate('200ms', style({ translate: '0 0' }))]),
      ]),
    ]),
  ]),
};
