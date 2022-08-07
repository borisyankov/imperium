import { BotTable, Icon, State, Suit } from "../types";
import * as E from '../effects'

export const macedoniansBarbarian: BotTable = [
  { if: Suit.FAME, then: E.PUT_INTO_HISTORY },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.BREAK_THROUGH_FOR_REGION]) },
  { if: State.BARBARIAN, then: E.FIRST_OF([[E.SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY,E.PUT_INTO_HISTORY], 'If able, spend 3 {materials} to acquire {civilised} or {uncivilised} and put this card into history.', E.BREAK_THROUGH_FOR_REGION]) },
  { if: Suit.REGION, then: [E.GAIN({ materials: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET ] },
  { if: Icon.PINNED, then: E.GAIN({ population: 1 }) },
  { if: 'Prosperity', then: [E.DISCARD(1), E.GAIN_1_M_1_P_PER_REGION_IN_PLAY, E.OTHER_MAY_DRAW] },
  { if: Icon.ATTACK, then: [E.STEAL({ materials: 2 }), E.DISCARD(1)] },
  { if: 'Other', then: [E.GAIN_1_PROGRESS_PER_REGION_IN_PLAY, E.DISCARD(1), E.PUT_INTO_HISTORY] },
];

export const macedoniansEmpire: BotTable = [
  { if: Suit.FAME, then: [E.GAIN_1_PROGRESS_PER_REGION_IN_PLAY, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.ACQUIRE_REGION_FROM_EXILE, E.GAIN({ progress: 1 })]) },
  { if: State.BARBARIAN, then: E.PUT_INTO_HISTORY },
  { if: Suit.REGION, then: [E.PLAY_REGION, E.EXILE_FROM_MARKET ] },
  { if: Icon.PINNED, then: [E.REGION_FROM_DISCARD_TO_PLAY, E.PUT_INTO_HISTORY] },
  { if: State.EMPIRE, then: E.FIRST_OF([[E.SPEND({ materials: 2 }), E.ACQUIRE_ANY], 'Place the top card from the dynasty deck into the discard and put this card into history.']) },
  { if: 'Other', then: [E.GAIN_1_PROGRESS_PER_REGION_IN_PLAY, E.PUT_INTO_HISTORY] },
];
