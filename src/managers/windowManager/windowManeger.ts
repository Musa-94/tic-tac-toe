import constants from '../../constants';

let onResizeCallbacks: Function[] = [];
let isInited: boolean = false;

export function init(): void {
    if (!isInited) {
        window.addEventListener('resize', onResizeListener, false);
        // window.addEventListener('keydown', onKeyDownListener, false); TODO uncomment when create listener keydown
        // window.addEventListener('focus', onFocusListener, false);
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

// export function subOnWindowResizeEvent(callback: Function): void | boolean {
//     if (!callback || !(typeof callback === 'function')) {
//         return false;
//     }
//
//     onResizeCallbacks.push(callback);
// }

export function returnResizeCallbacks(): Function[] {
    return onResizeCallbacks;
}

// export function unsubFromWindowResizeEvent(callback: Function): void {
//     for (let key in onResizeCallbacks) {
//         if (onResizeCallbacks[key] === callback) {
//             onResizeCallbacks.splice(key, 1);
//             break;
//         }
//     }
// }

export function clearAllArraysCallbacks() {
    onResizeCallbacks = [];
    // onKeyDownCallbacks = [];TODO uncomment when implement this logic
    // onFocusCallbacks = [];
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
