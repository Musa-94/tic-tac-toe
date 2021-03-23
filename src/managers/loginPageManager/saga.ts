import { takeEvery } from 'redux-saga/effects';
import constants from '../../constants';
// import * as actions from '../loginPageManager/actions;'
// import * as selectors from '../loginPageManager/selectors;' //TODO uncomment when added logic

export default function* watcherLoginPage() {
    yield takeEvery(constants.SET_CURRENT_USER_STORE, handleUser);
}

function* handleUser(action: any) {
    if (!action.payload) {
        return;
    }

    console.log(action);
}
