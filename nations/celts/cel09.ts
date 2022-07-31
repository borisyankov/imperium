import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const armorica: Card = {
  cardName: 'Armorica',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.RIVER],
  effect: E.GARRISON,
  suit: Suit.REGION,
  nation: Nation.CELTS,
  cardNumber: '1CEL9/28',
  startingLocation: StartingLocation.NATION,
};

export default armorica;