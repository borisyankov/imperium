import { Card, Icon, RegionType, Suit } from '../../types';

const hills: Card = {
  cardName: 'Hills',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'Gain 1 {population}. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG8/14',
}

export default hills;