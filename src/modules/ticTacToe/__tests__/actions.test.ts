import * as actions from '../actions';

describe('ticTacToeModules actions', () => {
    it('setPlayerSymbol', () => {
        const payload = {
            rowPosition: "",
            elementIndex: 0,
        }
        const expectAction = {
            type: 'set_new_symbol_on_game_board',
            payload,
        };

        expect(actions.setPlayerSymbol(payload)).toStrictEqual(expectAction);
    });
});