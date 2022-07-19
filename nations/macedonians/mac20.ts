import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const pelagonia: Card = {
  cardName: 'Pelagonia',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE],
  effect: 'Gain 1 {population}. You MAY garrison a card.',
  suit: Suit.REGION,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC20/23',
};

export default pelagonia;