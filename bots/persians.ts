import { BotTable, Icon, State, Suit } from '../types';
import * as E from '../effects'

export const persiansBarbarian: BotTable = [
  { if: Suit.FAME, then: [E.MATERIALS_TO_PROGRESS, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.BREAK_THROUGH_FOR_REGION]) },
  { if: Suit.TRIBUTARY, then: [E.GAIN({ materials: 2, population: 2 }), E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: State.BARBARIAN, then: E.FIRST_OF([[E.SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY, E.PUT_INTO_HISTORY], [E.SPEND({ materials: 2 }), E.ACQUIRE_CIV_OR_UNCIV], [E.GAIN_1_M_1_P_PER_REGION_IN_PLAY, E.PUT_ON_TOP_DECK]]) },
  { if: Suit.REGION, then: [E.GAIN({ population: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.ACQUIRE_REGION, E.PUT_INTO_HISTORY] },
  { if: 'Prosperity', then: [E.DISCARD(1), E.GAIN_1_M_1_P_PER_REGION_IN_PLAY, E.YOU_MAY_DRAW_CARD] },
  { if: 'Other', then: E.FIRST_OF([E.ACQUIRE_TRIBUTARY, E.ACQUIRE_UNCIV, E.PUT_INTO_HISTORY]) },
];

export const persiansEmpire: BotTable = [
  { if: Suit.FAME, then: [E.SPEND_3_P_TO_GAIN_1_PROGRESS_MULTI, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.TOP_DYNASTY_CARD_INTO_DISCARD]) },
  { if: State.BARBARIAN, then: E.PUT_INTO_HISTORY },
  { if: Suit.TRIBUTARY, then: [E.GAIN({ progress: 2 }), E.PUT_INTO_HISTORY] },
  { if: Icon.ATTACK, then: [E.BREAK_THROUGH_FOR_TRIBUTARY, E.YOU_GAIN({ materials: 2 }), E.YOU_TAKE_UNREST] },
  { if: Suit.REGION, then: [E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: E.PUT_INTO_HISTORY },
  { if: State.EMPIRE, then: [E.ACQUIRE_ANY, E.PUT_INTO_HISTORY] },
  { if: 'Other', then: E.FIRST_OF([E.ACQUIRE_REGION, E.GAIN({ progress: 1 })]) },
];
