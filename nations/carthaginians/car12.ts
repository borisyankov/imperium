import { Card, Icon, Nation, RegionType, StartingLocation, Suit } from '../../types';
import * as E from '../../effects';

const iberia: Card = {
  cardName: 'Iberia',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: [E.GARRISON],
  nation: Nation.CARTHAGINIANS,
  startingLocation: StartingLocation.NATION,
  suit: Suit.REGION,
  cardNumber: '1CAR12/23',
};

export default iberia;