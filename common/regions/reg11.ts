import { Card,  Icon, RegionType, Suit } from '../../types';

const river: Card = {
  cardName: 'River',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY put a card from your discard pile into your history. Exile a card from the market. You MAY garrison a card.',
  suit: Suit.REGION, 
  cardNumber: '1REG11/14',
}

export default river;