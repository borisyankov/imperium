import { Card, Suit, State, Icon } from '../../types';

const dramaAndPoetry: Card = {
  cardName: 'Drama & Poetry',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'Free play. Steal 1 {progress} from each other player. Each player MAY discard a card to return an {unrest}.',
  suit: Suit.CIVILISED,
  playerCount: 4,
  cardNumber: '1CIV1/15',
  vp: 2,
};

export default dramaAndPoetry;