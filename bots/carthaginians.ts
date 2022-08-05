import { BotTable, Icon, State, Suit } from '../types';
import * as E from '../effects'

// Place 2 {materials} instead of 1 {progress} during bot clean-up.

export const carthaginiansBarbarian: BotTable = [
  { if: Suit.FAME, then: [E.GAIN_1_P_1_M, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.BREAK_THROUGH_FOR_REGION]) },
  { if: State.BARBARIAN, then: E.FIRST_OF([E.SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY, 'Spend 2 {materials} acquire {civilised} or {uncivilised}. Otherwise, gain 1 {materials} and 1 {population} and put this card into history.']) },
  { if: Suit.REGION, then: [E.DISCARD_1_CARD, E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.GAIN_1_P_2_M, E.PUT_INTO_HISTORY] },
  { if: 'Prosperity', then: [E.DISCARD_1_CARD, E.GAIN_1_M_1_P_PER_REGION_IN_PLAY, E.YOU_MAY_DRAW_CARD] },
  { if: Suit.TRIBUTARY, then: E.DISCARD_3_CARDS },
  { if: 'Other', then: E.FIRST_OF([E.MATERIALS_TO_PROGRESS, E.ACQUIRE_REGION, E.DISCARD_2_CARDS]) },
];

export const carthaginiansEmpire: BotTable = [
  { if: State.BARBARIAN, then: [E.GAIN_1_M, E.DISCARD_1_CARD, E.PUT_INTO_HISTORY] },
  { if: Suit.FAME, then: E.PUT_INTO_HISTORY },
  { if: Icon.ATTACK, then: [E.BREAK_THROUGH_FOR_TRIBUTARY, E.PUT_INTO_HISTORY, E.YOU_ABANDON_REGION, E.YOU_MAY_DRAW_CARD] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.BREAK_THROUGH_FOR_REGION, E.YOU_DISCARD_2_CARDS]) },
  { if: State.EMPIRE, then: E.FIRST_OF([E.ACQUIRE_CIV_OR_UNCIV, E.GAIN_1_PROGRESS , E.YOU_TAKE_UNREST]) },
  { if: Suit.REGION, then: [E.GAIN_1_M, E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.GAIN_2_M, E.PUT_INTO_HISTORY] },
  { if: 'Other', then: [E.PUT_INTO_HISTORY, 'Spend 2 {materials}, or spend 2 {population} to gain 1 {progress}.', E.YOU_TAKE_UNREST] },
];
