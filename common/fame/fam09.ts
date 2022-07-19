import { Card, Suit } from '../../types';

const kingOfKings: Card = {
  cardName: 'King of Kings',
  effect: 'When you would gain this card, instead resolve it. Then flip this card. THIS TRIGGERS GAME END. If {barbarian}, gain 6 {progress}. If {empire}, gain 3 {progress} and develop for free.',
  suit: Suit.FAME, 
  cardNumber: '1FAM9/9',
};

export default kingOfKings;