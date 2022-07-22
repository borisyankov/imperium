import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const tradingShips: Card = {
  cardName: 'Trading Ships',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Exhaust: you MAY recall a {river} or a {fertile} to acquire a card in the market that has {materials} on it.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.DEVELOPMENT,
  cardNumber: '1CAR7/23',
  developmentCost: { materials: 4, population: 1 },
  vp: 4,
};

export default tradingShips;