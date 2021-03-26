import reducer from '../reducer';
import { TicTacToeState } from '../../../types';

describe('ticTacToeManager reducer', () => {
    let mockState: TicTacToeState;

    beforeEach(() => {
        mockState = {
            isWin: false,
            gameBoard: {
                0: ['', '', ''],
                1: ['', '', ''],
                2: ['', '', ''],
            },
            playerSymbol: 'x',
        };
    });

    it('should return the initial state', () => {
        const mockAction = { type: '' };

        expect(reducer(undefined, mockAction)).toStrictEqual(mockState);
    });

    it('should handle SET_CURRENT_GAME_BOARD_STORE', () => {
        const mockGameBoard =  {
            0: ['x', 'o', ''],
            1: ['', 'x', 'o'],
            2: ['', '', 'x'],
        };
        const expected = {
            ...mockState,
            gameBoard: mockGameBoard
        };

        expect(
            reducer(mockState, {
                type: 'set_current_game_board_store',
                payload: mockGameBoard
            })
        ).toStrictEqual(expected)
    });

    it('should handle TOGGLE_CURRENT_PLAYER_SYMBOL when playerSymbol x', () => {
        const expected = {
            ...mockState,
            playerSymbol: 'o',
        };

        expect(
            reducer(mockState, {
                type: 'toggle_current_player_symbol',
            })
        ).toStrictEqual(expected);
    });

    it('should handle TOGGLE_CURRENT_PLAYER_SYMBOL when playerSymbol 0', () => {
        const state = {
            ...mockState,
            playerSymbol: 'o'
        }
        const expected = {
            ...mockState,
            playerSymbol: 'x',
        };

        expect(
            reducer(state, {
                type: 'toggle_current_player_symbol',
            })
        ).toStrictEqual(expected);
    });

    it('should handle TOGGLE_IS_WIN', () => {
        const expected = {
            ...mockState,
            isWin: true,
        };

        expect(
            reducer(mockState, {
                type: 'toggle_is_win',
            })
        ).toStrictEqual(expected);
    })
});
