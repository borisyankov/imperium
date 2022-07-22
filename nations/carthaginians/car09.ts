import { Card, Nation, StartingLocation} from '../../types';
import prosperityBase from '../prosperity';

const prosperity: Card = {
  ...prosperityBase,
  nation: Nation.CARTHAGINIANS,
  cardNumber: '1CAR9/23',
  startingLocation: StartingLocation.NATION,
};

export default prosperity;