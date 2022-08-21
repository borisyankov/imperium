import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const mosaics: Card = {
  cardName: 'Mosaics',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Exhaust: pay 1 {materials} to draw a card from your discard pile.',
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC7/23',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 4, population: 1 },
  vp: 3,
};

export default mosaics;