import constants from 'src/constants';
import { TGameBoard } from 'src/types';

export const toggleIsWin = () => ({ type: constants.TOGGLE_IS_WIN });
export const setCurrentGamaBoardStore = (payload: TGameBoard) => ({ type: constants.SET_CURRENT_GAME_BOARD_STORE, payload });
export const toggleCurrentPlayerSymbol = () => ({ type: constants.TOGGLE_CURRENT_PLAYER_SYMBOL });
