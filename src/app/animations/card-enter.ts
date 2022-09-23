import { trigger, transition, style, animate } from '@angular/animations';
import { IDungeonsAnimationMetadata } from './dungeons-animation-metadata';

const CARD_ENTER = 'CARD_ENTER';
export const CARD_ENTER_ANIMATION: IDungeonsAnimationMetadata = {
  NAME: CARD_ENTER,
  TRIGGER_NAME: `@${CARD_ENTER}`,
  START: `@${CARD_ENTER}.start`,
  DONE: `@${CARD_ENTER}.done`,
  TRIGGER: trigger(CARD_ENTER, [
    transition('* => active', [
      style({ position: 'relative', zIndex: 999, translate: '100vw' }),
      animate('500ms', style({ translate: '1vw' })),
      animate('200ms', style({ translate: '0' })),
    ]),
  ]),
};
