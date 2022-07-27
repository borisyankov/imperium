import { Card, Suit, Nation, StartingLocation } from '../../types';

const celts: Card = {
  cardName: 'Celts',
  effect: 'Exhaust: when you acquire {uncivilised} or break through for {uncivilised}, exhaust this card. Each other player takes {unrest}.',
  suit: Suit.POWER,
  cardNumber: '1CEL1A/28',
  startingLocation: StartingLocation.IN_PLAY,
  nation: Nation.CELTS,
  vp: '1 VP per {uncivilised}',
};

export default celts;