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

export interface WindowAction {
    type: string;
    payload: TWindowSize;
}
