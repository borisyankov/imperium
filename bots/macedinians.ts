import { BotTable, Icon, State, Suit } from "../types";

export const macedoniansBarbarian: BotTable = [
  [ Suit.FAME, 'Put this card into history.' ],
  [ 'Glory', 'If able, abandon 3 {region} to gain the top {fame} card. Otherwise, break through for {region}.'],
  [ State.BARBARIAN, 'If able, spend 3 {population} to break through for {tributary} and put this card into history. Otherwise, if able, spend 3 {materials} to acquire {civilised} or {uncivilised} and put this card into history. Otherwise, break through for {region}.' ],
  [ Suit.REGION, 'Gain 1 {materials}. Play this {region}. Exile a card from the market.'],
  [ Icon.PINNED, 'Gain 1 {population}.'],
  [ 'Prosperity', 'Discard the top card from the bot deck. Gain 1 {materials} and 1 {population} per {region} in play. You MAY draw a card.'],
  [ Icon.ATTACK,  'Steal 2 {materials}. Discard the top card from the bot deck.'],
  [ 'Other', 'Gain 1 {progress} per {region} in play. Discard the top card from the bot deck. Put this card into history.'],
];

export const macedoniansEmpire: BotTable = [
  [Suit.FAME, 'Gain 1 {fame} per {region} in play. Put this card into history.'],
  ['Glory', 'If able, abandon 3 {region} to gain the top {fame} card. Otherwise, if able, acquire a {region} from exile. Otherwise gain 1 {progress}.'],
  [State.BARBARIAN, 'Put this card into history.'],
  [Suit.REGION, 'Play this {region}. Exile a card from the market.'],
  [ Icon.PINNED, 'If able, return a {region} from discard pile into play. Put this card into history.'],
  [ State.EMPIRE, 'If able, spend 2 {materials} to acquire {uncivilised} / {civilised} / {region} / {tributary}. Otherwise, place the top card from the dynasty deck into the discard and put this card into history.'],
  [ 'Other', 'Gain 1 {progress} per {region} in play. Put this card into history.'],
];
