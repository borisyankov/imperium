import { Card, Suit } from '../../types';
import cityBase from '../city';

const city: Card = {
  ...cityBase,
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC15/22',
  vp: 1,
};

export default city;