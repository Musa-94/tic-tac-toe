import constants from '../../constants';
import { TPayloadSetSymbolOnGameBoard } from '../../types';


export const setPlayerSymbol = (payload: TPayloadSetSymbolOnGameBoard) => ({ type: constants.SET_NEW_SYMBOL_ON_GAME_BOARD, payload });
