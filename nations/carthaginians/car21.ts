import { Card, Icon, Nation, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const mauretania: Card = {
  cardName: 'Mauretania',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION],
  effect: [E.GAIN_2_M, E.GARRISON],
  nation: Nation.CARTHAGINIANS,
  suit: Suit.REGION,
  cardNumber: '1CAR21/23',
};

export default mauretania;