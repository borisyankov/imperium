import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const kurgans: Card = {
  cardName: 'Kurgans',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: increase hand size by 1. Exhaust: put a card from your discard pile into your history.',
  nation: Nation.SCYTHIANS,
  developmentCost: { population: 3 },
  cardNumber: '1SCY4/24',
  startingLocation: StartingLocation.DEVELOPMENT,
  vp: 2,
};

export default kurgans;