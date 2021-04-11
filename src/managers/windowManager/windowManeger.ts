import constants from '../../constants';

let onResizeCallbacks: Function[] = [];
let isInited: boolean = false;

export function init(): void {
    if (!isInited) {
        window.addEventListener('resize', onResizeListener, false);
        isInited = true;
    }
}

export function onResizeListener(): void {
    for (let callback of onResizeCallbacks) {
        if (callback && (typeof callback === 'function')) {
            callback();
        }
    }
}

export function returnResizeCallbacks(): Function[] {
    return onResizeCallbacks;
}

export function getCurrentResolution(): string {
    let resolutionType = constants.RESOLUTION_OTHER;

    if (window.innerWidth >= 1360) {
        resolutionType = constants.RESOLUTION_FULL_HD;
    }

    if (window.innerWidth >= 2500) {
        resolutionType = constants.RESOLUTION_QHD;
    }

    if (window.innerWidth >= 2800) {
        resolutionType = constants.RESOLUTION_QHD_PLUS;
    }

    if (window.innerWidth >= 3100) {
        resolutionType = constants.RESOLUTION_4K;
    }

    if (window.innerWidth >= 7680) {
        resolutionType = constants.RESOLUTION_8K;
    }

    return resolutionType;
}
