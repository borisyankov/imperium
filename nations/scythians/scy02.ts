import { Card, Nation, StartingLocation} from '../../types';
import gloryBase from '../glory';

const glory: Card = {
  ...gloryBase,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY2/24',
  startingLocation: StartingLocation.ACCESSION,
};

export default glory;