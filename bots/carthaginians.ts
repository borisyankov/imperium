import { BotTable, Icon, State, Suit } from "../types";

// Place 2 {materials} instead of 1 {progress} during bot clean-up.

export const carthaginiansBarbarian: BotTable = [
  [Suit.FAME, 'Gain 1 {materials} and 1 {population}. Put this card into history.' ],
  ['Glory', 'Abandon 3 {region} to gain the top {fame} card. Otherwise break through for {region}.'],
  [State.BARBARIAN, 'If able, spend 3 {population} to break through for {tributary}. Otherwise, if able, spend 2 {materials} acquire {civilised} or {uncivilised}. Otherwise, gain 1 {materials} and 1 {population} and put this card into history.' ],
  [Suit.REGION, 'Discard the top card from the bot deck. Play this {region}. Exile a card from the market.'],
  [Icon.PINNED, 'Gain 1 {population} and 2 {materials}. Put this card into history.'],
  ['Prosperity', 'Discard the top card from the bot deck. Gain 1 {materials} and 1 {population} per {region} in play. You MAY draw a card.'],
  [Suit.TRIBUTARY, 'Discard the top 3 cards from the bot deck.'],
  ['Other', 'If able, spend all {materials} to gain the same number of {progress}. Otherwise, if able, acquire a {region}. Otherwise discard the top 2 cards fro the bot deck.'],
];

export const carthaginiansEmpire: BotTable = [
  [State.BARBARIAN, 'Gain 1 {materials}. Discard a card from the bot deck. Put this card into history.'],
  [Suit.FAME, 'Put this card into history.'],
  [Icon.ATTACK, 'Break through for {tributary}. Put this card into history. You abandon a {region} and MAY draw a card.'],
  ['Glory', 'If able, abandon 3 {region} to gain the top {fame} card. Otherwise, break through for {region} and you discard 2 cards.'],
  [State.EMPIRE, 'If able, acquire {civilised} or {uncivilised}. Otherwise, gain 1 {progress} and you take {unrest}.'],
  [Suit.REGION, 'Gain 1 {materials}. Play this {region}. Exile a card from the market.'],
  [Icon.PINNED, 'Gain 2 {materials}. Put this card into history.'],
  ['Other', 'Put this card into history. If able, spend 2 {materials}, or spend 2 {population} to gain 1 {progress}. You take {unrest}.'],
];
