import constants from '../../constants';
import { TicTacToeState, Action } from '../../types';

const initialState: TicTacToeState = {
    isWin: false,
    gameBoard: {
        0: ['', '', ''],
        1: ['', '', ''],
        2: ['', '', ''],
    },
    playerSymbol: 'x',
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case constants.SET_CURRENT_GAME_BOARD_STORE:
            return {
                ...state,
                gameBoard: action.payload,
            }
        case constants.TOGGLE_CURRENT_PLAYER_SYMBOL: {
            return {
                ...state,
                playerSymbol: state.playerSymbol === 'x' ? 'o' : 'x',
            }
        }
        case constants.TOGGLE_IS_WIN: {
            return {
                ...state,
                isWin: !state.isWin
            }
        }
        default:
            return state;
    }
}
