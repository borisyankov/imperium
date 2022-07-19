import { Card, State, Nation, Icon, StartingLocation, CardType } from '../../types';

const romeTheEternalCity: Card = {
  cardName: 'Rome, The Eternal City',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  cardType: [CardType.METROPOLIS],
  effect: 'Only playable if City of Rome is in play. Put City of Rome into your history. Solstice: choose: gain 1 {materials} OR gain 1 {population} OR draw a card.',
  nation: Nation.ROMANS,
  cardNumber: '1ROM7/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 3, population: 3 },
  vp: 4,
};

export default romeTheEternalCity;