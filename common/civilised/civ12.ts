import { Card, Suit, State } from '../../types';

const urbanDevelopment: Card = {
  cardName: 'Urban Development',
  state: State.EMPIRE,
  effect: 'Gain 1 {materials} and 1 {population} per {city} / {metropolis} in your play area.',
  suit: Suit.CIVILISED, 
  cardNumber: '1CIV12/15',
  vp: '2 VP per {city} / {metropolis}',
};

export default urbanDevelopment;