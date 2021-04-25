import { all, call } from 'redux-saga/effects';
import watcherLoginPage from '../managers/loginPageManager/saga';
import watchThemeManager from '../managers/themeManager/saga';
import watchWindowManager from '../managers/windowManager/saga';
import watchLanguageManager from '../managers/languageManager/saga';
import watchTicTacToeManager from '../managers/ticTacToeManager/saga';

const sagaList = [
    watcherLoginPage,
    watchThemeManager,
    watchWindowManager,
    watchLanguageManager,
    watchTicTacToeManager,
];

export default function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
