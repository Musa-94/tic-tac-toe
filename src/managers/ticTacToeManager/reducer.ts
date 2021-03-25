import constants from '../../constants';
import { TicTacToeState, Action } from '../../types';

const initialState: TicTacToeState = {
    gameBoard: {
        0: ['-', '-', '-'],
        1: ['-', '-', '-'],
        2: ['-', '-', '-'],
    },
    playerSymbol: '-',
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case constants.SET_CURRENT_GAME_BOARD_STORE:
            return {
                ...state,
                gameBoard: action.payload,
            }
        case constants.SET_CURRENT_PLAYER_SYMBOL: {
            return {
                ...state,
                playerSymbol: action.payload,
            }
        }
        default:
            return state;
    }
}
