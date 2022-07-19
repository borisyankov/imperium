import { Card,  Icon, RegionType, Suit } from '../../types';

const forest: Card = {
  cardName: 'Forest',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG6/14',
}

export default forest;