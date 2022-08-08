import cards from '../';
import { Icon } from '../../types';

describe('icons', () => {
  test('there are 40 cards with no icon', () => {
    const cardsWithNoIcon = cards.filter(card => card.icon === undefined);
    expect(cardsWithNoIcon.length).toEqual(40);
  });

  test('there are 36 cards with Pinned icon', () => {
    const cardsWithPinnedIcon = cards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(36);
  });

  test('there are 7 cards with Attack icon', () => {
    const cardsWithAttackIcon = cards.filter(card => card.icon === Icon.ATTACK);
    expect(cardsWithAttackIcon.length).toEqual(7);
  });
});