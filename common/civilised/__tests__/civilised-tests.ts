import civCards from '../';
import { Icon, State, Suit } from '../../../types';

describe('civilised', () => {
  test('all civilised have Empire state', () => {
    const cardsWithEmpireState = civCards.filter(card => card.state === State.EMPIRE);
    expect(cardsWithEmpireState.length).toEqual(civCards.length);
  });

  test('all civilised have Civilised suit', () => {
    const cardsWithCivilisedSuit = civCards.filter(card => card.suit === Suit.CIVILISED);
    expect(cardsWithCivilisedSuit.length).toEqual(civCards.length);
  });

  test('there are 6 civilised with Pinned icon', () => {
    const cardsWithPinnedIcon = civCards.filter(card => card.icon === Icon.PINNED);
    expect(cardsWithPinnedIcon.length).toEqual(6);
  });

  test('there are 5 tributaries with Attack icon', () => {
    const cardsWithAttackIcon = civCards.filter(card => card.icon === Icon.ATTACK);
    expect(cardsWithAttackIcon.length).toEqual(5);
  });
});