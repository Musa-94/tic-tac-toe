import * as actions from '../actions';
import {TPayloadSetSymbolOnGameBoard} from "../../../types";

describe('ticTacToeModules actions', () => {
    it('setPlayerSymbol', () => {
        const payload = {

        }
        const expectAction = {
            type: 'set_new_symbol_on_game_board',
        };

        expect(actions.setPlayerSymbol(payload)).toStrictEqual(expectAction);
    })
})