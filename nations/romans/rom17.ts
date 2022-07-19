import { Card, Nation } from '../../types';
import conquerBase from '../conquer';

const conquer: Card = {
  ...conquerBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM17/23',
};

export default conquer;