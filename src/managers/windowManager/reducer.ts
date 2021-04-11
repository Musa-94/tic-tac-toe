import constants from '../../constants';
import { getCurrentWindowSize } from './logic';
import { WindowState, WindowAction } from '../../types';

const initialState: WindowState = {
    resolution: constants.RESOLUTION_OTHER,
    windowSize: getCurrentWindowSize(),
}

export default (state = initialState, action: WindowAction) => {
    switch (action.type) {
        case constants.ACTION_TYPES.SET_PLATFORM_RESOLUTION_STORE:
            return {
                ...state,
                resolution: action.payload,
            };
        case constants.ACTION_TYPES.SET_WINDOW_SIZE_STORE: {
            const {
                width,
                height,
                clientWidth,
                clientHeight,
            } = action.payload;

            return {
                ...state,
                windowSize: {
                    width,
                    height,
                    clientWidth,
                    clientHeight,
                }
            }
        }
        default:
            return state;
    }
}
