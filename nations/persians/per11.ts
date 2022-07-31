import { Card, Nation, RegionType, StartingLocation, Icon, Suit } from '../../types';
import * as E from '../../effects';

const nisaeanPlain: Card = {
  cardName: 'Nisaean Plain',
  icon: Icon.PINNED,
  regionType: [RegionType.FERTILE, RegionType.FERTILE],
  effect: E.GARRISON,
  nation: Nation.PERSIANS,
  cardNumber: '1PER11/23',
  startingLocation: StartingLocation.NATION,
  suit: Suit.REGION,
};

export default nisaeanPlain;