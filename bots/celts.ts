import { BotTable, Icon, State, Suit } from "../types";
import * as E from '../effects'

export const celtsBarbarian: BotTable = [
  { if: Icon.ATTACK, then: [E.STEAL({ materials: 1 }), E.STEAL({ progress: 1 })] },
  { if: Suit.FAME, then: [E.MATERIALS_TO_PROGRESS, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, [E.DISCARD_DYNASTY_CARD, E.YOU_TAKE_UNREST]]) },
  { if: 'Conquer', then: E.FIRST_OF([E.SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY, E.ACQUIRE_REGION, E.YOU_TAKE_UNREST]) },
  { if: Suit.UNCIVILISED, then: E.FIRST_OF([E.ACQUIRE_UNCIV, [E.GAIN({ population: 1 }), E.PUT_INTO_HISTORY, E.YOU_TAKE_UNREST]]) },
  { if: State.BARBARIAN, then: [E.BREAK_THROUGH_FOR_UNCIV, E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.GAIN({ materials: 1, population: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.PUT_INTO_HISTORY, E.YOU_TAKE_UNREST] },
  { if: Suit.TRIBUTARY, then: [E.DISCARD(4), E.PUT_INTO_HISTORY] },
  { if: 'Other', then: [E.RETURN_UNREST_FROM_DISCARD, E.GAIN({ progress: 1 }), E.DISCARD(1)] },
];

export const celtsEmpire: BotTable = [
  { if: State.BARBARIAN, then: [E.PUT_INTO_HISTORY, E.YOU_TAKE_UNREST] },
  { if: Suit.FAME, then: [E.POPULATION_TO_PROGRESS, E.DISCARD(2), E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.GAIN({ progress: 2 })]) },
  { if: Suit.UNCIVILISED, then: [E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: Icon.ATTACK, then: [E.ACQUIRE_CIV_OR_UNCIV, E.YOU_TAKE_UNREST] },
  { if: State.EMPIRE, then: [E.ACQUIRE_ANY, E.YOU_GAIN({ materials: 2 })] },
  { if: Suit.TRIBUTARY, then: [E.GAIN({ progress: 2 }), E.PUT_INTO_HISTORY] },
  { if: 'Other', then: [E.PUT_INTO_HISTORY, E.YOU_TAKE_UNREST] },
];
