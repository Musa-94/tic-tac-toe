import { State } from '../../types';

export const getCurrentGameBoard = (state: State) => state.ticTacToeGame.gameBoard;
