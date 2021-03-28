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
            payload: 'ru'
        };

        expect(reducer(undefined, mockAction)).toStrictEqual(mockState);
    });

    it('should handle CHANGE_LANGUAGE_STORE', () => {
        const expected = {
            ...mockState,
            lang: 'ru'
        };

        expect(
            reducer(mockState, {
                type: 'change_language_store',
                payload: 'ru'
            })
        ).toStrictEqual(expected)
    });
});
