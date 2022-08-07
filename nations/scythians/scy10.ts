import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const ponticSteppe: Card = {
  cardName: 'Pontic Steppe',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: [E.GAIN({ population: 1 }), E.GARRISON],
  suit: Suit.REGION,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY10/24',
  startingLocation: StartingLocation.NATION,
};

export default ponticSteppe;