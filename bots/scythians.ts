import { BotTable, Icon, State, Suit } from '../types';
import * as E from '../effects'

export const scythiansBarbarian: BotTable = [
  { if: Icon.ATTACK, then: [E.DISCARD(2), E.YOU_RECALL_REGION, 'If you are an {empire}, steal 1 {population}.'] },
  { if: 'Conquer', then: E.FIRST_OF([E.SPEND_4_P_TO_BREAK_THROUGH_FOR_TRIBUTARY, E.ACQUIRE_REGION, E.GAIN({ population: 1 })]) },
  { if: 'Advance', then: E.FIRST_OF([E.SPEND_4_M_TO_BREAK_THROUGH_FOR_CIVILISED, E.ACQUIRE_UNCIV, E.GAIN({ materials: 1 })]) },
  { if: Suit.REGION, then: [E.GAIN({ population: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.DISCARD(2), E.GAIN({ materials: 2 }), E.PUT_INTO_HISTORY] },
  { if: State.BARBARIAN, then: E.FIRST_OF([['If there is 1 or more {region} in play, gain 1 {materials} per {region} in play.', E.BREAK_THROUGH_FOR_REGION]]) },
  { if: Suit.TRIBUTARY, then: E.FIRST_OF([E.RETURN_UNREST_FROM_DISCARD, [E.BREAK_THROUGH_FOR_REGION, E.PUT_INTO_HISTORY]]) },
  { if: 'Other', then: E.FIRST_OF([E.RETURN_UNREST_FROM_DISCARD, E.ACQUIRE_UNCIV, E.PUT_INTO_HISTORY]) },
];

export const scythiansEmpire: BotTable = [
  { if: Suit.FAME, then: [E.GAIN_1_PROGRESS_PER_REGION_IN_PLAY, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, 'Spend all {materials} and discard a number of cards from the bot deck equal to half the materials paid, rounding up.']) },
  { if: State.BARBARIAN, then: [E.RETURN_UNREST_FROM_DISCARD, E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.GAIN({ population: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: Icon.ATTACK, then: [E.GAIN({ materials: 2 }), E.YOU_DISCARD(1)] },
  { if: State.EMPIRE, then: [E.GAIN({ progress: 1 }), E.PUT_INTO_HISTORY] },
  { if: 'Other', then: E.FIRST_OF([[E.SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY, E.PUT_INTO_HISTORY], [E.GAIN({ population: 1 }), E.ACQUIRE_REGION]]) },
];
