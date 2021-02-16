import constants from 'src/constants';
import { takeEvery } from 'redux-saga/effects'
// import * as actions from '../loginPage/actions;'
// import * as selectors from '../loginPage/selectors;'

export default function* watcherLoginPage() {
    yield takeEvery(constants.SET_CURRENT_USER_STORE, handleUser);
}

function* handleUser(action) {
    if (!action.payload) {
        return;
    }

    console.log(action);
}
