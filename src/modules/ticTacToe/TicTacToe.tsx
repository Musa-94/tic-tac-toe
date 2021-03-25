import React from 'react';
import { withLocalization } from '../../lang/localization';
import { TGameBoard } from '../../types';
import {
    Row,
    Symbol,
    GameBoard,
} from './styledComponents';

type TProps = {
    currentGameBoard: TGameBoard
}

const TicTacToe: React.FC<TProps> = props => {
    const {
        currentGameBoard
    } = props;

    return (
        <GameBoard>
            <Row>
                {
                    currentGameBoard[0].map((symbol, index) =>
                        <Symbol key={index}
                                children={symbol === '-' ? '' : symbol}
                        />
                    )
                }
            </Row>
            <Row>
            {
                currentGameBoard[1].map((symbol, index) =>
                    <Symbol key={index}
                            children={symbol === '-' ? '' : symbol}
                    />
                )
            }
            </Row>
            <Row>
            {
                currentGameBoard[2].map((symbol, index) =>
                    <Symbol key={index}
                            children={symbol === '-' ? '' : symbol}
                    />
                )
            }
            </Row>
        </GameBoard>
    )
}

export default React.memo(withLocalization()(TicTacToe));
