import { Card, Nation, Suit, Icon, RegionType } from '../../types';

const zagros: Card = {
  cardName: 'Zagros',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: 'You MAY garrison a card.',
  nation: Nation.PERSIANS,
  cardNumber: '1PER20/23',
  suit: Suit.REGION,
};

export default zagros;