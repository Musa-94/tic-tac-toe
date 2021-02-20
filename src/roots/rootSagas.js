import { all, call } from 'redux-saga/effects';
import watcherLoginPage from 'src/managers/loginPage/saga';
import watchLanguageManager from 'src/managers/languageManager/saga.ts';

const sagaList = [
    watcherLoginPage,
    watchLanguageManager,
];

export default function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
