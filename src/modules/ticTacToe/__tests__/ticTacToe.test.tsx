import React from 'react';
import TicTacToe from '../TicTacToe';

const props = {
    isWin: false,
    setPlayerSymbol: () => {},
    currentGameBoard: {
        0: ['', '', ''],
        1: ['', '', ''],
        2: ['', '', ''],
    },
    currentPlayerSymbol: 'x',
};

describe('TicTacToe snapshot', () => {
    console.log = jest.fn();

    it('should correctly render', () => {
        //@ts-ignore TODO remove when learn write to declare
        const component = renderer(<TicTacToe {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
