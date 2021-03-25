export type TGameBoard = {
    0: Array<'-' | '0' | 'x'>,
    1: Array<'-' | '0' | 'x'>,
    2: Array<'-' | '0' | 'x'>,
}

export interface TicTacToeState {
    gameBoard: TGameBoard,
    playerSymbol: '-' | '0' | 'x'
}

export type Action = {
    type: string;
    payload?: TGameBoard | string;
}
