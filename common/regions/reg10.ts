import { Card,  Icon, RegionType, Suit } from '../../types';

const steppe: Card = {
  cardName: 'Steppe',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG10/14',
}

export default steppe;