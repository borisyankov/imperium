import { BotTable, Icon, State, Suit } from '../types';
import * as E from '../effects'

export const greeeksBarbarian: BotTable = [
  { if: Icon.ATTACK, then: [E.DISCARD_2_CARDS, E.STEAL_2_M, E.YOU_GAIN_1_P] },
  { if: Suit.FAME, then: [E.DISCARD_3_CARDS, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.BREAK_THROUGH_FOR_CIV]) },
  { if: 'Advance', then: E.FIRST_OF([[E.SPEND_1_M, E.BREAK_THROUGH_FOR_CIV], E.ACQUIRE_UNCIV]) },
  { if: State.BARBARIAN, then: [E.DISCARD_1_CARD, E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.GAIN_1_M, E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.GAIN_1_P_1_M, E.PUT_INTO_HISTORY] },
  { if: 'Other', then: E.FIRST_OF([[E.SPEND_2_P, E.BREAK_THROUGH_FOR_REGION], [E.SPEND_2_M, E.BREAK_THROUGH_FOR_UNCIV], E.DISCARD_2_CARDS, E.PUT_INTO_HISTORY]) },
];

export const greeksEmpire: BotTable = [
  { if: Icon.ATTACK, then: [E.ACQUIRE_ANY, E.YOU_RECALL_PINNED] },
  { if: Suit.FAME, then: [E.DISCARD_2_CARDS, E.GAIN_2_PROGRESS, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.GAIN_2_PROGRESS]) },
  { if: State.BARBARIAN, then: [E.DISCARD_1_CARD, E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.DISCARD_1_CARD, E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: E.PUT_INTO_HISTORY },
  { if: State.EMPIRE, then: E.ACQUIRE_CIV_OR_UNCIV },
  { if: 'Other', then: E.FIRST_OF([[[E.SPEND_3_P, E.BREAK_THROUGH_FOR_TRIBUTARY], [E.SPEND_2_M, E.ACQUIRE_CIV], E.RETURN_UNREST_FROM_DISCARD, E.GAIN_1_PROGRESS,  E.PUT_INTO_HISTORY]]) },
];
