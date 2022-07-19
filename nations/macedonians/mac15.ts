import { Card, Nation } from '../../types';
import baseConquer from '../conquer';

const conquer: Card = {
  ...baseConquer,
  nation: Nation.MACEDONIANS,
  cardNumber: '1MAC15/23',
};

export default conquer;