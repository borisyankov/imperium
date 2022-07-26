import { Card, Icon, Nation, StartingLocation, State } from '../../types';

const oghamScript: Card = {
  cardName: 'Ogham Script',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Passive: increase your hand size by 1. Exhaust: you MAY put a card from your hand into your history. You MAY put a card from your discard pile into your history.',
  nation: Nation.CELTS,
  cardNumber: '1CEL6/28',
  startingLocation: StartingLocation.DEVELOPMENT,
  developmentCost: { materials: 2, population: 2 },
  vp: 4,
};

export default oghamScript;