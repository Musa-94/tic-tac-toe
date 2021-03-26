import React from 'react';
import SignUp from '../SignUp';

jest.mock('react-i18next');

const props = {
    t: () => '',
}

describe('SignUp snapshot', () => {
    it('should correctly render', () => {
        //@ts-ignore TODO remove
        const component = renderer(<SignUp {...props}/>);

        expect(component).toMatchSnapshot();
    });
});

