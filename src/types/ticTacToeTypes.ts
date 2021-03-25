export type TGameBoard = {
    0: Array<'' | 'o' | 'x'>,
    1: Array<'' | 'o' | 'x'>,
    2: Array<'' | 'o' | 'x'>,
}

export interface TicTacToeState {
    isWin: boolean;
    gameBoard: TGameBoard;
    playerSymbol: 'o' | 'x';
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
