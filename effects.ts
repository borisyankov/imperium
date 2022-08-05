import { Effect } from "./types";

export const FIRST_OF = (effect: Effect[]) => effect.join(' || ');

export const GARRISON = 'You MAY garrison a card.';
export const EXILE_FROM_MARKET = 'Exile a card from the market.';
export const GAIN_1_P = 'Gain 1 {population}.';
export const GAIN_1_M = 'Gain 1 {materials}.';
export const GAIN_2_M = 'Gain 2 {materials}.';
export const GAIN_3_M = 'Gain 3 {materials}.';
export const GAIN_1_P_1_M = 'Gain 1 {materials} and 1 {population}.';
export const GAIN_1_P_2_M = 'Gain 1 {population} and 2 {materials}.';
export const GAIN_1_PROGRESS = 'Gain 1 {progress}.';
export const GAIN_2_PROGRESS = 'Gain 2 {progress}.';
export const GAIN_1_M_1_P_PER_REGION_IN_PLAY = 'Gain 1 {materials} and 1 {population} per {region} in play.';
export const GAIN_1_PROGRESS_PER_REGION_IN_PLAY = 'Gain 1 {progress} per {region} in play.';
export const STEAL_1_M = 'Steal 1 {materials}.';
export const STEAL_2_M = 'Steal 2 {materials}.';
export const STEAL_1_PROGRESS = 'Steal 1 {progress}.';
export const DRAW = 'Draw a card.';
export const MAY_DRAW = 'You MAY draw a card.';
export const DISCARD_TO_HISTORY = 'You MAY put a card from your discard pile into your history.';
export const MAY_DRAW_DISCARD = 'You MAY draw a card from your discard pile.';
export const EACH_ABANDON_REGION = 'Each other player abandons a {region}.';
export const FROM_DISCARD_TO_DECK = 'You may place a card of your choice from your discard pile on the top of your deck.';
export const PUT_INTO_HISTORY = 'Put this card into history.';
export const CANNOT_GARRISON = 'This card cannot be garrisoned.';
export const BREAK_THROUGH_FOR_REGION = 'Break through for {region}.';
export const BREAK_THROUGH_FOR_CIV = 'Break through for {civilised}.';
export const BREAK_THROUGH_FOR_UNCIV = 'Break through for {uncivilised}.';
export const BREAK_THROUGH_FOR_TRIBUTARY = 'Break through for {tributary}.';
export const ACQUIRE_REGION = 'Acquire {region}.';
export const ACQUIRE_REGION_FROM_EXILE = 'Acquire a {region} from exile.';
export const ACQUIRE_UNCIV = 'Acquire {uncivilised}.';
export const ACQUIRE_CIV_OR_UNCIV = 'Acquire {civilised} or {uncivilised}.';

// bot-specific
export const DISCARD_1_CARD = 'Discard the top card from the bot deck.';
export const DISCARD_2_CARDS = 'Discard the top 2 cards from the bot deck.';
export const DISCARD_3_CARDS = 'Discard the top 3 cards from the bot deck.';
export const DISCARD_4_CARDS = 'Discard the top 4 cards from the bot deck.';
export const PLAY_REGION = 'Play this {region}.';
export const ABANDON_3_REGIONS_FOR_FAME = 'Abandon 3 {region} to gain the top {fame} card.';
export const ACQUIRE_ANY = 'Acquire {uncivilised} / {civilised} / {region} / {tributary}.';
export const SPEND_2_M_FOR_ANY = 'Spend 2 {materials} to acquire {uncivilised} / {civilised} / {region} / {tributary}.';
export const SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY = 'Spend 3 {population} to break through for {tributary}.';
export const REGION_FROM_DISCARD_TO_PLAY = 'Return a {region} from discard pile into play.';
export const MATERIALS_TO_PROGRESS = 'Spend all {materials} to gain the same number of {progress}.';
export const POPULATION_TO_PROGRESS = 'Spend all {population} to gain the same number of {progress}.';
export const DISCARD_DYNASTY_CARD = 'Discard the top dynasty card';
export const RETURN_UNREST_FROM_DISCARD = 'Return an {unrest} from discard pile.';

// YOU
export const OTHER_MAY_DRAW = 'You MAY draw a card.';
export const YOU_TAKE_UNREST = 'YOU take {unrest}.';
export const YOU_DISCARD_1_CARD = 'YOU discard a card.';
export const YOU_DISCARD_2_CARDS = 'YOU discard 2 cards.';
export const YOU_ABANDON_REGION = 'YOU abandon a {region}.';
export const YOU_RECALL_REGION = 'YOU recall a {region}.';
export const YOU_MAY_DRAW_CARD = 'YOU MAY draw a card.';
export const YOU_GAIN_2_M = 'YOU gain 2 {materials}.';