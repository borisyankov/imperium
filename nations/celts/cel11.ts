import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const britannia: Card = {
  cardName: 'Britannia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: E.GARRISON,
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL11/28',
  startingLocation: StartingLocation.NATION,
};

export default britannia;