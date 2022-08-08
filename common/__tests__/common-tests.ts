import cards from '../';

export const TOTAL_CARD_COUNT = 15 + 9 + 14 + 11 + 22 + 12;

describe('cards', () => {
  test('there are 83 common cards', () => {
    expect(cards.length).toEqual(TOTAL_CARD_COUNT);
  });

  test('there are 69 cards for 2 players', () => {
    const cardsFor2 = cards.filter(card => !card.playerCount);
    expect(cardsFor2.length).toEqual(TOTAL_CARD_COUNT - 14);
  });

  test('there are 77 cards for 3 players', () => {
    const cardsFor3 = cards.filter(card => !card.playerCount || card.playerCount === 3);
    expect(cardsFor3.length).toEqual(TOTAL_CARD_COUNT - 6);
  });

  test('all cards have cardName', () => {
    const cardsWithNames = cards.filter(card => card.cardName);
    expect(cardsWithNames.length).toEqual(TOTAL_CARD_COUNT);
  });

  test('all cards have cardNumber', () => {
    const cardsWithNames = cards.filter(card => card.cardNumber);
    expect(cardsWithNames.length).toEqual(TOTAL_CARD_COUNT);
  });
});