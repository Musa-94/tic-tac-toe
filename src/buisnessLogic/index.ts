import { TGameBoard } from '../types';

export function checkIsWinGameBoard(currentGameBoard: TGameBoard, playerSymbol: string) {
    if (checkMidTable(currentGameBoard, playerSymbol)) {
        return true;
    }

    if (checkLeftTable(currentGameBoard, playerSymbol)) {
        return true;
    }

    if (checkRightTable(currentGameBoard, playerSymbol)) {
        return true;
    }

    if (checkTopRow(currentGameBoard, playerSymbol)) {
        return true;
    }

    if (checkMidRow(currentGameBoard, playerSymbol)) {
        return true;
    }

    if (checkBottomRow(currentGameBoard, playerSymbol)) {
        return true;
    }

    if (checkSlashTable(currentGameBoard, playerSymbol)) {
        return true;
    }

    return checkBackSlashTable(currentGameBoard, playerSymbol);
}

function checkMidTable(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[0][1] === playerSymbol &&
        currentGameBoard[1][1] === playerSymbol &&
        currentGameBoard[2][1] === playerSymbol;
}

function checkLeftTable(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[0][0] === playerSymbol &&
        currentGameBoard[1][0] === playerSymbol &&
        currentGameBoard[2][0] === playerSymbol;
}

function checkRightTable(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[0][2] === playerSymbol &&
        currentGameBoard[1][2] === playerSymbol &&
        currentGameBoard[2][2] === playerSymbol;
}

function checkTopRow(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[0][0] === playerSymbol &&
        currentGameBoard[0][1] === playerSymbol &&
        currentGameBoard[0][2] === playerSymbol;
}

function checkMidRow(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[1][0] === playerSymbol &&
        currentGameBoard[1][1] === playerSymbol &&
        currentGameBoard[1][2] === playerSymbol;
}

function checkBottomRow(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[2][0] === playerSymbol &&
        currentGameBoard[2][1] === playerSymbol &&
        currentGameBoard[2][2] === playerSymbol;
}

function checkSlashTable(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[0][0] === playerSymbol &&
        currentGameBoard[1][1] === playerSymbol &&
        currentGameBoard[2][2] === playerSymbol;
}

function checkBackSlashTable(currentGameBoard: TGameBoard, playerSymbol: string): boolean {
    return currentGameBoard[0][2] === playerSymbol &&
        currentGameBoard[1][1] === playerSymbol &&
        currentGameBoard[2][0] === playerSymbol;
}
