import { BotTable, Icon, State, Suit } from '../types';
import * as E from '../effects'

export const greeeksBarbarian: BotTable = [
  { if: Icon.ATTACK, then: [E.DISCARD(2), E.STEAL({ materials: 2 }), E.YOU_GAIN({ population: 1 })] },
  { if: Suit.FAME, then: [E.DISCARD(3), E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.BREAK_THROUGH_FOR_CIV]) },
  { if: 'Advance', then: E.FIRST_OF([[E.SPEND({ materials: 1 }), E.BREAK_THROUGH_FOR_CIV], E.ACQUIRE_UNCIV]) },
  { if: State.BARBARIAN, then: [E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.GAIN({ materials: 1 }), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: [E.GAIN({ materials: 1, population: 1 }), E.PUT_INTO_HISTORY] },
  { if: 'Other', then: E.FIRST_OF([[E.SPEND({ progress: 2 }), E.BREAK_THROUGH_FOR_REGION], [E.SPEND({ materials: 2 }), E.BREAK_THROUGH_FOR_UNCIV], E.DISCARD(2), E.PUT_INTO_HISTORY]) },
];

export const greeksEmpire: BotTable = [
  { if: Icon.ATTACK, then: [E.ACQUIRE_ANY, E.YOU_RECALL_PINNED] },
  { if: Suit.FAME, then: [E.DISCARD(2), E.GAIN({ progress: 2 }), E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, E.GAIN({ progress: 2 })]) },
  { if: State.BARBARIAN, then: [E.DISCARD(1), E.PUT_INTO_HISTORY] },
  { if: Suit.REGION, then: [E.DISCARD(1), E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Icon.PINNED, then: E.PUT_INTO_HISTORY },
  { if: State.EMPIRE, then: E.ACQUIRE_CIV_OR_UNCIV },
  { if: 'Other', then: E.FIRST_OF([[[E.SPEND({ progress: 3 }), E.BREAK_THROUGH_FOR_TRIBUTARY], [E.SPEND({ materials: 2 }), E.ACQUIRE_CIV], E.RETURN_UNREST_FROM_DISCARD, E.GAIN({ progress: 1 }),  E.PUT_INTO_HISTORY]]) },
];
