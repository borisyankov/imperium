import cards from '../';

describe('cards', () => {
  test('there are 12 cards with no VP', () => {
    const cardsWithNoVP = cards.filter(card => card.vp === undefined);
    expect(cardsWithNoVP.length).toEqual(12);
  });
  
  test('there are 50 cards with numeric VP', () => {
    const cardsWithNumericVP = cards.filter(card => typeof card.vp === 'number');
    expect(cardsWithNumericVP.length).toEqual(50);
  });

  test('there are 21 cards with conditional VP', () => {
    const cardsWithConditionalVP = cards.filter(card => typeof card.vp === 'string');
    expect(cardsWithConditionalVP.length).toEqual(21);
  });
});