import { BotTable, Icon, State, Suit } from '../types';
import * as E from '../effects'

export const vikingsBarbarian: BotTable = [
  { if: Icon.ATTACK, then: [E.STEAL({ materials: 2 }), [E.SPEND({ population: 1 }), E.ACQUIRE_TRIBUTARY_OR_REGION], E.YOU_DISCARD(1)] },
  { if: Suit.FAME, then: [E.RETURN_UNREST_FROM_DISCARD, E.ACQUIRE_ANY, E.PUT_INTO_HISTORY] },
  { if: 'Glory', then: E.FIRST_OF([E.ABANDON_3_REGIONS_FOR_FAME, [E.DISCARD(1), E.STEAL({ materials: 2 })]]) },
  { if: Suit.REGION, then: [[E.SPEND({ materials: 3 }), E.ACQUIRE_UNCIV], E.PLAY_REGION, E.EXILE_FROM_MARKET] },
  { if: Suit.UNCIVILISED, then: [E.TOP_DYNASTY_CARD_INTO_DISCARD, E.REGION_FROM_DISCARD_TO_PLAY, E.PUT_INTO_HISTORY] },
  { if: State.BARBARIAN, then: E.FIRST_OF([[E.SPEND({ materials: 3 }), E.ACQUIRE_UNCIV], [E.DISCARD(2), E.GAIN({ materials: 1, population: 1 })]]) },
  { if: Icon.PINNED, then: [E.GAIN({ population: 1 }), E.TOP_DYNASTY_CARD_INTO_DISCARD, E.PUT_INTO_HISTORY] },
  { if: 'Other', then: E.FIRST_OF([E.RETURN_UNREST_FROM_DISCARD, E.ACQUIRE_REGION_FROM_EXILE, [E.ABANDON_3_REGIONS_FOR_FAME, E.TOP_DYNASTY_CARD_INTO_DISCARD], [E.GAIN_FAME, E.PUT_INTO_HISTORY]]) },
];

export const vikingsEmpire: BotTable = [];
