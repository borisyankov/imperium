import { Nation } from '../types';
import { marketBoardSetup } from './boardSetup';
import { playerSetup } from './playerSetup';

export const gameSetup = (nationsInPlay: Nation[]) => ({
  marketBoard: marketBoardSetup(nationsInPlay.length),
  players: nationsInPlay.map(nation => playerSetup(nation)),
})
