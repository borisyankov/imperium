import { Card, Icon, RegionType, Suit } from '../../types';

const oasis: Card = {
  cardName: 'Oasis',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG7/14',
}

export default oasis;