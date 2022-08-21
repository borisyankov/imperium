import { Card, Suit, Nation, StartingLocation } from '../../types';

const vikings: Card = {
  cardName: 'Vikings',
  effect: 'Passive: cards that would be placed into your history are instead discarded. When you take {unrest}, look at the top card of your nation deck. You MAY place it under the botom of the nation deck. Exhaust: when you return an {unrest}, exhaust this card to draw 2 cards.',
  suit: Suit.POWER,
  cardNumber: '1VIK1A/26',
  startingLocation: StartingLocation.IN_PLAY,
  nation: Nation.VIKINGS,
  vp: '1 VP per {*} card',
};

export default vikings;