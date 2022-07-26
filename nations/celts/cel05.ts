import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const chariots: Card = {
  cardName: 'Chariots',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: you may acquire exiled {region}. Your Conquer and {attack} cards lose the {barbarian} icon.',
  nation: Nation.CELTS,
  cardNumber: '1CEL5/28',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { population: 3 },
  vp: 4,
};

export default chariots;