import { all, call } from 'redux-saga/effects';
import watcherLoginPage from 'src/managers/loginPage/saga';

const sagaList = [
    watcherLoginPage,
];

export default function* watchRootSaga() {
    yield all(sagaList.map(saga => call(saga)));
}
