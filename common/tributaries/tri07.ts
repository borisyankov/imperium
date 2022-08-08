import { Card, Suit } from '../../types';

const sumerians: Card = {
  cardName: 'Sumerians',
  effect: 'Cannot be played.',
  suit: Suit.TRIBUTARY, 
  cardNumber: '1TRI7/11',
  vp: 3, // TODO: Return up to 2 {unrest} before scoring
};

export default sumerians;