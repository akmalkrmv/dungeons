import { trigger, transition, style, animate } from '@angular/animations';
import { IDungeonsAnimationMetadata } from './dungeons-animation-metadata';

const ACTIVATE_CARD = 'ACTIVATE_CARD';
export const ACTIVATE_CARD_ANIMATION: IDungeonsAnimationMetadata = {
  NAME: ACTIVATE_CARD,
  TRIGGER_NAME: `@${ACTIVATE_CARD}`,
  START: `@${ACTIVATE_CARD}.start`,
  DONE: `@${ACTIVATE_CARD}.done`,
  TRIGGER: trigger(ACTIVATE_CARD, [
    transition('* => active', [
      style({ position: 'relative', zIndex: 999 }),
      animate('200ms', style({ translate: '0 10vh' })),
      animate('400ms', style({ translate: '0 -200vh' })),
    ]),
  ]),
};
