import { Card, Icon, RegionType, Suit } from '../../types';

const coast: Card = {
  cardName: 'Coast',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'Draw a card. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG4/14',
}

export default coast;