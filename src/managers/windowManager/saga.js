import { fork, call, put, take, throttle, select, apply, putResolve } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { deepEqual } from 'src/utils/deepEqual';
import constants from 'src/constants';
import * as actions from './actions';
import * as selectors from './selectors';
import * as windowManager from './windowManeger';
import { getCurrentWindowSize } from './logic';

let windowManagerChannel;

export default function* watchWindowManager() {
    yield throttle(250, constants.ACTION_TYPES.WINDOW_RESIZE, handleWindowResize);
    const currentWindowSize = yield call(getCurrentWindowSize);
    yield call(setWindowSize, currentWindowSize);
    yield fork(startEventChannel);
}

export function* startEventChannel() {
    windowManagerChannel = yield call(openWindowManagerChannel);

    while (windowManagerChannel) {
        const channelAction = yield take(windowManagerChannel);
        yield put(channelAction);
    }
}

export function openWindowManagerChannel() {
    return eventChannel(emitter => {
        const onWindowResize = () => {
            windowResize(emitter);
        };

        window.addEventListener('resize', onWindowResize, false);

        return () => {
            window.removeEventListener('resize', onWindowResize, false);
        }
    })
}

export function windowResize(emitter) {
    emitter(actions.windowResize());
}

export function* handleWindowResize() {
    const currentWindowSize = yield call(getCurrentWindowSize);
    const windowSize = yield select(selectors.getWindowSize);

    if (!deepEqual(windowSize, currentWindowSize)) {
        yield call(setWindowSize, currentWindowSize);
    }
}

export function* setWindowSize(windowSize) {
    yield putResolve(actions.setWindowSizeStore(windowSize));
    yield call(checkingResizingPlatform);
}

export function* checkingResizingPlatform() {
    const platformResolution = yield select(selectors.getPlatformResolution);
    const currentResolution =  yield apply(windowManager, windowManager.getCurrentResolution);

    console.log('currentResolution', currentResolution);

    if (platformResolution !== currentResolution) {
        yield put(actions.setPlatformResolutionStore(currentResolution));
    }
}

export function closeWindowManagerChannel() {
    if (windowManagerChannel) {
        windowManagerChannel.close();
        windowManagerChannel = null;
    }
}
