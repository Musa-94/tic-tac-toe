import React from 'react';
import CustomButton from '../CustomButton';

const props = {
    fontSize: 20,
    textTitle: 'Button',
    textColor: 'red',
    borderColor: 'black',
    backgroundColor: 'green'
};

describe('CustomButton snapshot', () => {
    it('should correctly render', () => {
        //@ts-ignore TODO remove when learn write to declare
        const component = renderer(<CustomButton {...props}/>);

        expect(component).toMatchSnapshot();
    });
});
