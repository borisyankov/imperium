import { Card, Icon, RegionType, Suit } from '../../types';

const cape: Card = {
  cardName: 'Cape',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'Exile a card from the market. You MAY garrison a card. Passive: you MAY recall this to avoid the effect of an {attack}.',
  suit: Suit.REGION, 
  cardNumber: '1REG12/14',
}

export default cape;