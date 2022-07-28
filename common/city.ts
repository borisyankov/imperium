import { Card, Icon, CardType } from '../types';

const city: Card = {
  cardName: 'City',
  icon: Icon.PINNED,
  cardType: [CardType.CITY],
  effect: 'Solstice: you MAY discard a card to choose: gain 1 {population} OR gain 1 {materials} OR draw a card.',
};

export default city;