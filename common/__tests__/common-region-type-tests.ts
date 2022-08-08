import cards from '../';
import { Card, RegionType, Suit } from '../../types';

const countRegionTypes = (cards: Card[], regionType: RegionType) =>
cards.reduce((total, card) => total + ((card.regionType || []).filter(r => r === regionType)).length, 0);

describe('region type', () => {
  test('there are 4 Region cards with no region types', () => {
    const cardsRegionWithNoRegionType = cards.filter(card => card.suit === Suit.REGION && !card.regionType);
    expect(cardsRegionWithNoRegionType.length).toEqual(4);
  });

  test('there are 14 Production icons', () => {
    const productionIconCount = countRegionTypes(cards, RegionType.PRODUCTION);
    expect(productionIconCount).toEqual(14);
  });

  test('there are 5 Fertile icons', () => {
    const fertileIconCount = countRegionTypes(cards, RegionType.FERTILE);
    expect(fertileIconCount).toEqual(5);
  });

  test('there are 5 River icons', () => {
    const riverIconCount = countRegionTypes(cards, RegionType.RIVER);
    expect(riverIconCount).toEqual(5);
  });
});