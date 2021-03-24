import { all, call } from 'redux-saga/effects';
import watcherLoginPage from '../managers/loginPageManager/saga';
import watchLanguageManager from '../managers/languageManager/saga';

const sagaList = [
    watcherLoginPage,
    watchLanguageManager,
];

export default function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
