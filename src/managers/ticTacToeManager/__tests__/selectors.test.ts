import * as selectors from '../selectors';

describe('ticTacToeManager selectors', () => {
    // @ts-ignore //TODO remove when declared module
    const state = mockStore;

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
