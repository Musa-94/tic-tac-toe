import * as actions from '../actions';

describe('ticTacToeManager actions', () => {
    it('toggleIsWin', () => {
        const expectAction = {
            type: 'toggle_is_win',
        };

        expect(actions.toggleIsWin()).toStrictEqual(expectAction);
    });

    it('setCurrentGamaBoardStore', () => {
        const payload = {
            0: ['x', '', ''],
            1: ['', 'x', ''],
            2: ['', '', 'o'],
        }
        const expectAction = {
            type: 'set_current_game_board_store',
            payload,
        };

        expect(actions.setCurrentGamaBoardStore(payload)).toStrictEqual(expectAction);
    });

    it('toggleCurrentPlayerSymbol', () => {
        const expectAction = {
            type: 'toggle_current_player_symbol',
        };

        expect(actions.toggleCurrentPlayerSymbol()).toStrictEqual(expectAction);
    });
});
