import { Effect, Resources } from "./types";

export const FIRST_OF = (effect: Effect[]) => effect.join(' || ');

export const GAIN = (resources: Resources) => 'Gain ' + JSON.stringify(resources);
export const YOU_GAIN = (resources: Resources) => 'YOU gain ' + JSON.stringify(resources);
export const SPEND = (resources: Resources) => 'Spend ' + JSON.stringify(resources);
export const STEAL = (resources: Resources) => 'Steal ' + JSON.stringify(resources);
export const DISCARD = (n: number) => `Discard the top ${n} cards from the bot deck.`;
export const YOU_DISCARD = (n: number) => `YOU discard ${n} cards.`;

export const GARRISON = 'You MAY garrison a card.';
export const EXILE_FROM_MARKET = 'Exile a card from the market.';
export const GAIN_1_M_1_P_PER_REGION_IN_PLAY = 'Gain 1 {materials} and 1 {population} per {region} in play.';
export const GAIN_1_PROGRESS_PER_REGION_IN_PLAY = 'Gain 1 {progress} per {region} in play.';
export const SPEND_3_P_TO_GAIN_1_PROGRESS_MULTI = 'Spend 3 {population} to gain 1 {progress} as many times as possible.';
export const DRAW = 'Draw a card.';
export const MAY_DRAW = 'You MAY draw a card.';
export const DISCARD_TO_HISTORY = 'You MAY put a card from your discard pile into your history.';
export const MAY_DRAW_DISCARD = 'You MAY draw a card from your discard pile.';
export const EACH_ABANDON_REGION = 'Each other player abandons a {region}.';
export const FROM_DISCARD_TO_DECK = 'You may place a card of your choice from your discard pile on the top of your deck.';
export const TOP_DYNASTY_CARD_INTO_DISCARD = 'Place the top card from the dynasty deck into the discard.';
export const PUT_INTO_HISTORY = 'Put this card into history.';
export const CANNOT_GARRISON = 'This card cannot be garrisoned.';
export const BREAK_THROUGH_FOR_REGION = 'Break through for {region}.';
export const BREAK_THROUGH_FOR_CIV = 'Break through for {civilised}.';
export const BREAK_THROUGH_FOR_UNCIV = 'Break through for {uncivilised}.';
export const BREAK_THROUGH_FOR_TRIBUTARY = 'Break through for {tributary}.';
export const ACQUIRE_REGION = 'Acquire {region}.';
export const ACQUIRE_TRIBUTARY = 'Acquire {tributary}.';
export const ACQUIRE_TRIBUTARY_OR_REGION = 'Acquire {tributary} or {region}.';
export const ACQUIRE_REGION_FROM_EXILE = 'Acquire a {region} from exile.';
export const ACQUIRE_UNCIV = 'Acquire {uncivilised}.';
export const ACQUIRE_CIV = 'Acquire {civilised}.';
export const ACQUIRE_CIV_OR_UNCIV = 'Acquire {civilised} or {uncivilised}.';

// bot-specific
export const PLAY_REGION = 'Play this {region}.';
export const GAIN_FAME = 'Gain the top {fame} card.';
export const ABANDON_3_REGIONS_FOR_FAME = 'Abandon 3 {region} to gain the top {fame} card.';
export const ACQUIRE_ANY = 'Acquire {uncivilised} / {civilised} / {region} / {tributary}.';
export const SPEND_3_P_TO_BREAK_THROUGH_FOR_TRIBUTARY = 'Spend 3 {population} to break through for {tributary}.';
export const SPEND_4_P_TO_BREAK_THROUGH_FOR_TRIBUTARY = 'Spend 4 {population} to break through for {tributary}.';
export const SPEND_4_M_TO_BREAK_THROUGH_FOR_CIVILISED = 'Spend 4 {materials} to break through for {civilised}.';
export const REGION_FROM_DISCARD_TO_PLAY = 'Return a {region} from discard pile into play.';
export const MATERIALS_TO_PROGRESS = 'Spend all {materials} to gain the same number of {progress}.';
export const POPULATION_TO_PROGRESS = 'Spend all {population} to gain the same number of {progress}.';
export const DISCARD_DYNASTY_CARD = 'Discard the top dynasty card';
export const RETURN_UNREST_FROM_DISCARD = 'Return an {unrest} from discard pile.';
export const PUT_ON_TOP_DECK = 'Put this card on top of the bot deck.';

// YOU
export const OTHER_MAY_DRAW = 'You MAY draw a card.';
export const YOU_TAKE_UNREST = 'YOU take {unrest}.';

export const YOU_ABANDON_REGION = 'YOU abandon a {region}.';
export const YOU_RECALL_REGION = 'YOU recall a {region}.';
export const YOU_MAY_DRAW_CARD = 'YOU MAY draw a card.';
export const YOU_RECALL_PINNED = 'YOU recall a {pinned} card.';