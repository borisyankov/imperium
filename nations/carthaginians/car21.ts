import { Card, Icon, Nation, RegionType, Suit } from '../../types';

const mauretania: Card = {
  cardName: 'Mauretania',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: 'Gain 2 {materials}. You MAY garrison a card.',
  nation: Nation.CARTHAGINIANS,
  suit: Suit.REGION,
  cardNumber: '1CAR21/23',
};

export default mauretania;