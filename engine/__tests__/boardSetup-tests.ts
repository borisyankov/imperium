import { marketBoardSetup } from "../boardSetup";

describe('boardSetup', () => {
  test('can perform setup', () => {
    const marketBoard = marketBoardSetup(2);
    expect(marketBoard.mainDeck.length).toEqual(32);
    expect(marketBoard.civilisedDeck.length).toEqual(5);
    expect(marketBoard.uncivilisedDeck.length).toEqual(5);
    expect(marketBoard.regionDeck.length).toEqual(5);
  });
});