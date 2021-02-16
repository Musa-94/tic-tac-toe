import { takeEvery, call } from 'redux-saga/effects';
import constants from 'src/constants';
import { changeLanguage } from 'src/lang/localization';

export default function* watchLanguageManager() {
    yield takeEvery(constants.CHANGE_LANGUAGE_STORE, handleChangeLanguage)
}

function* handleChangeLanguage(action) {
    if (!action.payload) {
        return;
    }

    yield call(changeLanguage, action.payload);
}
