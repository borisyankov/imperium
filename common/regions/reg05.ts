import { Card, Icon, RegionType, Suit } from '../../types';

const floodplain: Card = {
  cardName: 'Floodplain',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY put a card from your discard pile into your history. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG5/14',
}

export default floodplain;