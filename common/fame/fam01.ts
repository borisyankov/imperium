import { Card, Suit } from '../../types';

const praiseworthy: Card = {
  cardName: 'Praiseworthy',
  effect: 'Choose: put this card into your history OR break through for {uncivilised} / {civilised} / {region} / {tributary}.',
  suit: Suit.FAME, 
  cardNumber: '1FAM1/9',
  vp: '7 VP if in history, 3 VP otherwise',
};

export default praiseworthy;