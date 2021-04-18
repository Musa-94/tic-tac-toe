import * as selectors from '../selectors';

describe('ticTacToeModules selectors', () => {
     // @ts-ignore //TODO remove when declared module
    const state = mockStore;

    it('getIsWin', () => {
        const expectedState = false;

        expect(selectors.getIsWin(state)).toBeFalsy()
    });

    it('getCurrentGameBoard', () => {
        const expectedState = {
            0: ['', '', ''],
            1: ['', '', ''],
            2: ['', '', ''],
        };

        expect(selectors.getCurrentGameBoard(state)).toStrictEqual(expectedState)
    });

    it('getCurrentPlayerSymbol', () => {
        const expectedState = 'x';

        expect(selectors.getCurrentPlayerSymbol(state)).toStrictEqual(expectedState)
    });
});