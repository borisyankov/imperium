import { Card, Icon, Nation, StartingLocation } from '../../types';

const caravans: Card = {
  cardName: 'Caravans',
  icon: Icon.PINNED,
  effect: 'Exhaust: pay 3 {materials} abd discard a card to acquire a card in the market that has {materials} on it.',
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.NATION,
  cardNumber: '1CAR10/23',
};

export default caravans;