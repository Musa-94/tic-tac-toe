import watchTicTacToeManager, * as saga from '../saga';
import { takeEvery, select, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as logic from '../../../buisnessLogic';
import * as selectors from '../selectors';

describe('ticTacToeManager saga', () => {
    describe('watchTicTacToeManager', () => {
        const generator = watchTicTacToeManager();

        it('should takeEvery handleGameBoard', () => {
            expect(generator.next().value).toEqual(takeEvery('set_new_symbol_on_game_board', saga.handleGameBoard))
        });

        it('should finished', () => {
            expect(generator.next().done).toBeTruthy();
        });
    });

    describe('handleGameBoard try', () => {
        const mockGameBoard = {
            0: ['', '', ''],
            1: ['', '', ''],
            2: ['', '', ''],
        };
        const mockPlayerSymbol = 'x';
        const action = {
            type: 'set_new_symbol_on_game_board',
            payload: {
                rowPosition: '0',
                elementIndex: 0
            },
        };
        const generator = saga.handleGameBoard(action);

        it('should select getCurrentGameBoard', () => {
            expect(generator.next().value).toEqual(select(selectors.getCurrentGameBoard));
        });

        it('should select getCurrentPlayerSymbol', () => {
            // @ts-ignore //TODO remove when clear wtf
            expect(generator.next(mockGameBoard).value).toEqual(select(selectors.getCurrentPlayerSymbol));
        });

        it('should call checkIsWin', () => {
            // @ts-ignore
            expect(generator.next(mockPlayerSymbol).value).toEqual(call(saga.checkIsWin, mockGameBoard, mockPlayerSymbol))
        });

        it('should finished', () => {
            expect(generator.next().done).toBeTruthy();
        });
    });

    describe('handleGameBoard catch', () => {
        console.error = jest.fn();
        const error = 'not found';
        const action = {
            type: 'set_new_symbol_on_game_board',
            payload: {
                rowPosition: '0',
                elementIndex: 0
            },
        };
        const generator = saga.handleGameBoard(action);
        generator.next();

        it('should select getCurrentGameBoard', () => {
            expect(generator.throw({ error: 'not found' }).value).toEqual(console.error('Error', error));
        });

        it('should finished', () => {
            expect(generator.next().done).toBeTruthy();
        });
    });

    describe('checkIsWin when isWin true', () => {
        const mockGameBoard = {
            0: ['', '', ''],
            1: ['', '', ''],
            2: ['', '', ''],
        };
        const mockPlayerSymbol = 'x';
        const isWin = true;
        const generator = saga.checkIsWin(mockGameBoard, mockPlayerSymbol);

        it('should call checkIsWinGameBoard', () => {
            expect(generator.next().value).toEqual(call(logic.checkIsWinGameBoard, mockGameBoard, mockPlayerSymbol));
        });

        it('should put toggleIsWin', () => {
            expect(generator.next(isWin).value).toEqual(put(actions.toggleIsWin()));
        });

        it('should finished', () => {
            expect(generator.next().done).toBeTruthy();
        });
    });

    describe('checkIsWin when isWin false', () => {
        const mockGameBoard = {
            0: ['', '', ''],
            1: ['', '', ''],
            2: ['', '', ''],
        };
        const mockPlayerSymbol = 'x';
        const isWin = false;
        const generator = saga.checkIsWin(mockGameBoard, mockPlayerSymbol);

        it('should call checkIsWinGameBoard', () => {
            expect(generator.next().value).toEqual(call(logic.checkIsWinGameBoard, mockGameBoard, mockPlayerSymbol));
        });

        it('should put toggleCurrentPlayerSymbol', () => {
            expect(generator.next(isWin).value).toEqual(put(actions.toggleCurrentPlayerSymbol()));
        });

        it('should finished', () => {
            expect(generator.next().done).toBeTruthy();
        });
    });
});
