import { Card, Icon, RegionType, Suit } from '../../types';

const woodland: Card = {
  cardName: 'Woodland',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: 'You MAY draw a card of your choice from your discard pile and place it on the top of your draw deck. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG13/14',
}

export default woodland;