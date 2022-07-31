import { Card, Nation, Suit, Icon, RegionType } from '../../types';
import * as E from '../../effects';

const zagros: Card = {
  cardName: 'Zagros',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: E.GARRISON,
  nation: Nation.PERSIANS,
  cardNumber: '1PER20/23',
  suit: Suit.REGION,
};

export default zagros;