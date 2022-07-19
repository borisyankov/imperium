import { Card, Suit } from '../../types';

const gambling: Card = {
  cardName: 'Gambling',
  effect: 'Free play. Pay 1 {materials} and declare one of the following: {uncivilised}, {civilised}, {region} or {tributary}. Reveal the top card of the main deck. If it matches the declared type, add it to your hand. Otherwise, exile it.',
  suit: Suit.UNCIVILISED_CIVILISED, 
  cardNumber: '1UNC18/22',
  vp: 1,
};

export default gambling;