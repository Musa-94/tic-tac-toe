import constants from '../../constants';
import { getCurrentWindowSize } from './logic';
import { WindowState, Action } from '../../types';


const initialState: WindowState = {
    resolution: constants.RESOLUTION_OTHER,
    windowSize: getCurrentWindowSize(),
}

export default (state = initialState, action: Action) => {
    switch (action.type) {
        case constants.SET_PLATFORM_RESOLUTION_STORE:
            return {
                ...state,
                resolution: action.payload,
            };
        case constants.SET_WINDOW_SIZE_STORE: {
            return {
                ...state,
                windowSize: {
                    width: action.payload.width,
                    height: action.payload.height,
                    clientWidth: action.payload.clientWidth,
                    clientHeight: action.payload.clientHeight,
                }
            }
        }
        default:
            return state;
    }
}
