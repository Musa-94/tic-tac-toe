import { put, takeEvery } from 'redux-saga/effects';
import constants from '../../constants';
import * as actions from './actions';

export default function* watchThemeManager() {
    yield takeEvery(constants.ACTION_TYPES.SET_PLATFORM_RESOLUTION_STORE, changeResolutionCoefficient);
}

export function* changeResolutionCoefficient(action) {
    if (!action.payload) {
        return;
    }

    let coefficient = null;

    switch (action.payload) {
        case constants.RESOLUTION_4K: coefficient = 2; break;
        case constants.RESOLUTION_8K: coefficient = 4; break;
        case constants.RESOLUTION_QHD: coefficient = 1.2; break;
        case constants.RESOLUTION_OTHER: coefficient = 0.9; break;
        case constants.RESOLUTION_MOBILE: coefficient = 1; break;
        case constants.RESOLUTION_FULL_HD: coefficient = 1; break;
        case constants.RESOLUTION_QHD_PLUS: coefficient = 1.4; break;
        default: coefficient = 1; break;
    }

    yield put(actions.setResolutionCoefficientStore(coefficient));
}
