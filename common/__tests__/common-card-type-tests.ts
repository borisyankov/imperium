import cards from '../';
import { Card, CardType } from '../../types';

const countIcons = (cards: Card[], cardType: CardType) =>
    cards.reduce((total, card) => total + ((card.cardType || []).filter(c => c === cardType)).length, 0);

describe('cardType', () => {
  test('there are 3 City card type icons', () => {
    const cityIconCount = countIcons(cards, CardType.CITY);
    expect(cityIconCount).toEqual(3);
  });

  test('there are 2 Metropolis card type icons', () => {
    const metropolisIconCount = countIcons(cards, CardType.METROPOLIS);
    expect(metropolisIconCount).toEqual(2);
  });

  test('there is one Scroll card type icons', () => {
    const scrollIconCount = countIcons(cards, CardType.SCROLL);
    expect(scrollIconCount).toEqual(1);
  });

  test('there is one Mask card type icons', () => {
    const maskIconCount = countIcons(cards, CardType.MASK);
    expect(maskIconCount).toEqual(1);
  });

  test('there is one Knight card type icons', () => {
    const knightIconCount = countIcons(cards, CardType.KNIGHT);
    expect(knightIconCount).toEqual(1);
  });
});