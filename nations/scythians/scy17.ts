import { Card, Nation } from '../../types';
import conquerAdvance from '../conquer';

const conquer: Card = {
  ...conquerAdvance,
  nation: Nation.SCYTHIANS,
  cardNumber: '1SCY17/24',
};

export default conquer;