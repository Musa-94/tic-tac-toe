import React from 'react';
import * as styled from '../styledComponents';
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

describe('TicTacToe methods', () => {
    let component: any;
    let mockProps: any;

    beforeEach(() => {
        mockProps = {
            ...props,
            setPlayerSymbol: jest.fn(),
        }

        //@ts-ignore
        component = mount(<TicTacToe {...mockProps}/>);
    });

    it('should call setPlayerSymbol in rowPosition 0', () => {
        const rowPosition = '0';
        const elementIndex = 0;
        component.find(styled.Symbol).at(0).simulate('click');

        expect(mockProps.setPlayerSymbol).toBeCalledTimes(1);
        expect(mockProps.setPlayerSymbol).toBeCalledWith({ rowPosition, elementIndex });
    });

    it('should call setPlayerSymbol in rowPosition 1', () => {
        const rowPosition = '1';
        const elementIndex = 1;
        component.find(styled.Symbol).at(4).simulate('click');

        expect(mockProps.setPlayerSymbol).toBeCalledTimes(1);
        expect(mockProps.setPlayerSymbol).toBeCalledWith({ rowPosition, elementIndex });
    });

    it('should call setPlayerSymbol in rowPosition 2', () => {
        const rowPosition = '2';
        const elementIndex = 2;
        component.find(styled.Symbol).at(8).simulate('click');

        expect(mockProps.setPlayerSymbol).toBeCalledTimes(1);
        expect(mockProps.setPlayerSymbol).toBeCalledWith({ rowPosition, elementIndex });
    });
});
