import { BotTable, Icon, State, Suit } from "../types";
import * as E from '../effects'

export const romansBarbarian: BotTable = [
  { if: Icon.ATTACK, then: [E.YOU_RECALL_REGION, E.YOU_TAKE_UNREST] },
  { if: Suit.FAME, then: [E.POPULATION_TO_PROGRESS, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, [E.GAIN({ progress: 1 }), E.YOU_RECALL_REGION]]) },
  { if: Suit.REGION, then: [E.DISCARD(1), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.GAIN({ population: 1 }), E.PUT_INTO_HISTORY] },
  { if: 'Advance', then: E.FIRST_OF(['If able, spend 5 {materials} to break through for {civilised}.', E.ACQUIRE_UNCIV, E.GAIN({ population: 1 })]) },
  { if: 'Prosperity', then: [E.DISCARD(1), E.GAIN_1_M_1_P_PER_REGION_IN_PLAY, E.YOU_MAY_DRAW_CARD] },
  { if: State.BARBARIAN, then: E.FIRST_OF([E.SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY, E.ACQUIRE_REGION, E.GAIN({ population: 1 })]) },
  { if: Suit.TRIBUTARY, then: [E.DISCARD(2), E.GAIN({ progress: 1 }), E.PUT_INTO_HISTORY] },
  { if: 'Other', then: E.GAIN({ materials: 2 }) },
];

export const romansEmpire: BotTable = [
  { if: State.BARBARIAN, then: E.PUT_INTO_HISTORY },
  { if: Suit.FAME, then: [E.POPULATION_TO_PROGRESS, E.PUT_INTO_HISTORY] },
  { if: Icon.ATTACK, then: [E.YOU_DISCARD(1), E.YOU_ABANDON_REGION] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.YOU_DISCARD(2)]) },
  { if: 'Prosperity', then: [E.GAIN_1_M_1_P_PER_REGION_IN_PLAY, E.YOU_MAY_DRAW_CARD] },
  { if: Suit.REGION, then: [E.GAIN({ population: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: Suit.TRIBUTARY, then: [E.DISCARD(2), E.PUT_INTO_HISTORY] },
  { if: State.EMPIRE, then: [E.BREAK_THROUGH_FOR_CIV, E.PUT_INTO_HISTORY] },
  { if: 'Other', then: ['If able, spend 3 {materials} to gain 1 {progress}.', E.GAIN({ population: 1 }), E.PUT_INTO_HISTORY] },
];
