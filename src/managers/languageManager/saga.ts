import { takeEvery, call } from 'redux-saga/effects';
import constants from '../../constants';
import { changeLanguage } from '../../lang/localization';
import { ChangeLanguageAction } from '../../types';

export default function* watchLanguageManager() {
    yield takeEvery(constants.CHANGE_LANGUAGE_STORE, handleChangeLanguage)
}

function* handleChangeLanguage(action: ChangeLanguageAction) {
    if (!action.payload) {
        return;
    }

    yield call(changeLanguage, action.payload);
}