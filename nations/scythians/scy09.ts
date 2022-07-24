import { Card, Icon, Nation, StartingLocation } from '../../types';

const tamga: Card = {
  cardName: 'Tamga',
  icon: Icon.PINNED,
  effect: 'Exhaust: discard a card to draw 2 cards.',
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY9/24',
  startingLocation: StartingLocation.NATION,
  vp: '1 VP per 2 {region}',
};

export default tamga;