import { Card, Suit, State, Icon } from '../../types';

const corruption: Card = {
  cardName: 'Corruption',
  icon: Icon.ATTACK,
  state: State.EMPIRE,
  effect: 'All players gain 2 {materials}. All other players take {unrest}. Gain 1 {progress}.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV4/15',
  vp: 2,
};

export default corruption;