export interface WindowState {
    resolution: string;
    windowSize: TWindowSize;
}

export type TWindowSize = {
    width: number;
    height: number;
    clientWidth: number;
    clientHeight: number;
}

export interface Action {
    type: string;
    payload: TWindowSize;
}
