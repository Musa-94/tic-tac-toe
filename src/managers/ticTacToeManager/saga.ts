import { takeEvery, select, put, call } from 'redux-saga/effects';
import constants from '../../constants';
import { TActionSetSymbolOnGameBoard, TGameBoard, TPayloadSetSymbolOnGameBoard } from '../../types';
import * as actions from './actions';
import * as selectors from './selectors';
import { checkIsWinGameBoard } from '../../buisnessLogic';

export default function* watchTicTacToeManager() {
    yield takeEvery(constants.SET_NEW_SYMBOL_ON_GAME_BOARD, handleGameBoard);
}

export function* handleGameBoard(action: TActionSetSymbolOnGameBoard) {
    try {
        const { rowPosition, elementIndex }: TPayloadSetSymbolOnGameBoard = action.payload;

        const currentGameBoard: TGameBoard = yield select(selectors.getCurrentGameBoard);
        const currentPlayerSymbol: string = yield select(selectors.getCurrentPlayerSymbol);

        // @ts-ignore //TODO remove when clear wtf
        (currentGameBoard[rowPosition][elementIndex]) === '' &&
        // @ts-ignore
        (currentGameBoard[rowPosition][elementIndex] = currentPlayerSymbol);

        yield call(checkIsWin, currentGameBoard, currentPlayerSymbol);
    } catch (e) {
        console.error('Error', e);
    }
}

export function* checkIsWin(currentGameBoard: TGameBoard, currentPlayerSymbol: string) {
    const isWin: boolean = yield call(checkIsWinGameBoard, currentGameBoard, currentPlayerSymbol);

    if (isWin) {
        console.log('Победил игрок:', currentPlayerSymbol);
        yield put(actions.toggleIsWin());
    } else {
        yield put(actions.toggleCurrentPlayerSymbol());
    }
}
