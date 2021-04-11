import constants from 'src/constants';

export const windowResize = () => ({ type: constants.ACTION_TYPES.WINDOW_RESIZE });
export const setWindowSizeStore = payload => ({ type: constants.ACTION_TYPES.SET_WINDOW_SIZE_STORE, payload });
export const setPlatformResolutionStore = payload => ({ type: constants.ACTION_TYPES.SET_PLATFORM_RESOLUTION_STORE, payload });
