import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { IDungeonsAnimationMetadata } from './dungeons-animation-metadata';

const CARD_LIST_ENTER = 'CARD_LIST_ENTER';
export const CARD_LIST_ENTER_ANIMATION: IDungeonsAnimationMetadata = {
  NAME: CARD_LIST_ENTER,
  TRIGGER_NAME: `@${CARD_LIST_ENTER}`,
  START: `@${CARD_LIST_ENTER}.start`,
  DONE: `@${CARD_LIST_ENTER}.done`,
  TRIGGER: trigger(CARD_LIST_ENTER, [
    transition('* => active', [
      query(':enter', [
        style({ position: 'relative', zIndex: 999, translate: '-100vw' }),
        stagger(-100, [animate('500ms', style({ translate: '1vw' })), animate('200ms', style({ translate: '0' }))]),
      ]),
      query(
        ':leave',
        [
          style({ position: 'relative', zIndex: 999, translate: '0' }),
          stagger(100, [
            animate('500ms', style({ translate: '1vw' })),
            animate('200ms', style({ translate: '-100vw' })),
          ]),
        ],
        { optional: true }
      ),
    ]),
    transition('* => inverse', [
      query(':enter', [
        style({ position: 'relative', zIndex: 999, translate: '100vw' }),
        stagger(100, [animate('500ms', style({ translate: '-1vw' })), animate('200ms', style({ translate: '0' }))]),
      ]),
      query(
        ':leave',
        [
          style({ position: 'relative', zIndex: 999, translate: '0' }),
          stagger(100, [
            animate('500ms', style({ translate: '-1vw' })),
            animate('200ms', style({ translate: '100vw' })),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]),
};
