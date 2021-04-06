import reducer from '../reducer';
import { LanguageState } from '../../../types';

describe('languageManager reducer', () => {
    let mockState: LanguageState;

    beforeEach(() => {
        mockState = {
            lang: 'en'
        };
    });

    it('should return the initial state', () => {
        const mockAction = { 
            type: '',
        };
        
        // @ts-ignore
        expect(reducer(undefined, mockAction)).toStrictEqual(mockState);
    });

    it('should handle CHANGE_LANGUAGE_STORE', () => {
        const action = {
            type: 'change_language_store',
            payload: 'ru'
        };

        const expected = {
            ...mockState,
            lang: 'ru'
        };

        expect(reducer(mockState, action)).toStrictEqual(expected);
    });
});
