import { Card, Nation, StartingLocation, Icon, RegionType, Suit } from '../../types';
import * as E from '../../effects';

const galliaAquitania: Card = {
  cardName: 'Gallia Aquitania',
  icon: Icon.PINNED,
  regionType: [RegionType.PRODUCTION, RegionType.FERTILE],
  effect: E.GARRISON,
  suit: Suit.REGION,
  nation: Nation.ROMANS,
  cardNumber: '1ROM11/23',
  startingLocation: StartingLocation.NATION,
};

export default galliaAquitania;