import { Card,  Icon, RegionType, Suit } from '../../types';

const marsh: Card = {
  cardName: 'Marsh',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'Gain 2 {materials}. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG9/14',
}

export default marsh;