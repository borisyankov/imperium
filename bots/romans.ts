import { BotTable, Icon, State, Suit } from "../types";

export const romansBarbarian: BotTable = [
  [Icon.ATTACK, 'You recall a {region}. You take {unrest}.'],
  [Suit.FAME, 'Spend all {population} to gain the same number of {progress}. Put this card into history.' ],
  ['Glory', 'If able, abandon 3 {region} to gain the top {fame} card. Otherwise, gain 1 {progress} and you recall a {region}.']
  [Suit.REGION, 'Discard the top card from the bot deck. Play this {region}. Exile a card from the market.'],
  [Icon.PINNED, 'Gain 1 {population}. Put this card into history.'],
  ['Advance', 'If able, spend 5 {materials} to break through for {civilised}. Otherwise, if able, acquire {uncivilised}. Otherwise, gain 1 {population}.'],
  ['Prosperity', 'Discard the top card from the bot deck. Gain 1 {materials} and 1 {population} per {region} in play. You MAY draw a card.'],
  [State.BARBARIAN, 'If able, spend 3 {population} to break through for {tributary}. Otherwise, if able, acquire {region}. Otherwise, gain 1 {population}.' ],
  [Suit.TRIBUTARY, 'Discard the top 2 cards from the bot deck. Gain 1 {progress}. Put this card into history.'],
  ['Other', 'Gain 2 {materials}.'],
];

export const romansEmpire: BotTable = [
  [State.BARBARIAN, 'Put this card into history.'],
  [Suit.FAME, 'Spend all {population} to gain the same number of {progress}. Put this card into history.'],
  [Icon.ATTACK,  'You discard a card. You abandon a {region}.'],
  ['Glory', 'If able, abandon 3 {region} to gain the top {fame} card. Otherwise, you discard 2 cards.'],
  ['Prosperity', 'Gain 1 {materials} and 1 {population} per {region} in play. You MAY draw a card.'],
  [Suit.REGION, 'Gain 1 {population}. Play this {region}. Exile a card from the market.']
  [Icon.PINNED, 'Discard the top card from the bot deck. Put this card into history.'],
  [Suit.TRIBUTARY, 'Discard the top 2 cards from the bot deck. Put this card into history.'],
  [State.EMPIRE, 'Break through for {civilised}. Put this card into history.'],
  ['Other', 'If able, spend 3 {materials} to gain 1 {progress}. Gain 1 {population}. Put this card into history.'],
];
