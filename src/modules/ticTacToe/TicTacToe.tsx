import React, { useCallback } from 'react';
import { withLocalization } from '../../lang/localization';
import { TGameBoard } from '../../types';
import {
    Row,
    Symbol,
    GameBoard,
} from './styledComponents';

type TProps = {
    isWin: boolean;
    setPlayerSymbol: Function;
    currentGameBoard: TGameBoard;
    currentPlayerSymbol: string;
}

const TicTacToe: React.FC<TProps> = props => {
    const {
        isWin,
        setPlayerSymbol,
        currentGameBoard,
        currentPlayerSymbol,
    } = props;

    console.log('Сейчас играет:', currentPlayerSymbol);

    const onSetSymbol = useCallback((rowPosition: string, elementIndex: number) => {
        !isWin && setPlayerSymbol({ rowPosition, elementIndex });
    }, [setPlayerSymbol, isWin]);

    return (
        <GameBoard>
            <Row>
                {
                    currentGameBoard[0].map((symbol, index) =>
                        <Symbol key={index}
                                onClick={() => onSetSymbol('0', index)}
                                children={symbol}
                                elementIndex={index}
                        />
                    )
                }
            </Row>
            <Row row={'mid'}>
                {
                    currentGameBoard[1].map((symbol, index) =>
                        <Symbol key={index}
                                onClick={() => onSetSymbol('1', index)}
                                children={symbol}
                                elementIndex={index}
                        />
                    )
                }
            </Row>
            <Row>
                {
                    currentGameBoard[2].map((symbol, index) =>
                        <Symbol key={index}
                                onClick={() => onSetSymbol('2', index)}
                                children={symbol}
                                elementIndex={index}
                        />
                    )
                }
            </Row>
        </GameBoard>
    );
};

export default React.memo(withLocalization()(TicTacToe));
