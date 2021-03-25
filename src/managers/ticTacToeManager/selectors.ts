import { State } from '../../types';

export const getCurrentGameBoard = (state: State) => state.ticTacToeGame.gameBoard;
export const getCurrentPlayerSymbol = (state: State) => state.ticTacToeGame.playerSymbol;
