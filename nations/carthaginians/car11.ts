import { Card, Nation, StartingLocation} from '../../types';
import advanceBase from '../advance';

const advance: Card = {
  ...advanceBase,
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR11/23',
  startingLocation: StartingLocation.NATION,
};

export default advance;