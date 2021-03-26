export type TGameBoard = {
    0: Array<string>,
    1: Array<string>,
    2: Array<string>,
}

export interface TicTacToeState {
    isWin: boolean;
    gameBoard: TGameBoard;
    playerSymbol: string;
}

export type TPayloadSetSymbolOnGameBoard = {
    rowPosition: string;
    elementIndex: number;
}

export type Action = {
    type: string;
    payload?: TGameBoard | string;
}

export type TActionSetSymbolOnGameBoard = {
    type: string;
    payload: TPayloadSetSymbolOnGameBoard;
}
