import { Card, Suit, State, Icon } from '../../types';

const temple: Card = {
  cardName: 'Temple',
  icon: Icon.PINNED,
  state: State.EMPIRE,
  effect: 'Exhaust: discard a card to gain 1 {progress}. Solstice: return an {unrest} from your discard pile.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV14/15',
  vp: '1 VP per 5 {progress}',
};

export default temple;