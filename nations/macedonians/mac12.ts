import { Card, Nation, StartingLocation } from '../../types';
import baseGlory from '../glory';

const glory: Card = {
  ...baseGlory,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC12/23',
  startingLocation: StartingLocation.NATION,
};

export default glory;