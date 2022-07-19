import { Card, Suit, Icon } from '../../types';

const invasion: Card = {
  cardName: 'Invasion',
  icon: Icon.ATTACK,
  effect: 'Pay 3 {materials}. All other players take {unrest}. Choose: break through for {tributary} OR break through for {region} and each other player recalls a {region}.',
  suit: Suit.UNCIVILISED, 
  cardNumber: '1UNC7/22',
  vp: 1,
};

export default invasion;