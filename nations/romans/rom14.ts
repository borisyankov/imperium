import { Card, Nation} from '../../types';
import gloryBase from '../glory';

const glory: Card = {
  ...gloryBase,
  nation: Nation.ROMANS,
  cardNumber: '1ROM14/23',
};

export default glory;