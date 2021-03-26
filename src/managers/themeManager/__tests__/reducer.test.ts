import reducer from '../reducer';
import { ThemeState } from '../../../types';

describe ('ThemeManager reducer ', () => {
    let mockState: ThemeState;

    beforeEach(() => {
        mockState = {
            coefficient: 1,
            currentTheme: 'Dark'
        };
    });

    it('should return the initial state', () => {
        const mockAction = { type: '' };

        expect(reducer(undefined, mockAction)).toStrictEqual(mockState);
    });

    it('should handle SET_RESOLUTION_COEFFICIENT_STORE', () => {
        const mockAction = {
            type: 'set_resolution_coefficient_store',
            payload: 1.7
        }
        const expected = {
            ...mockState,
            coefficient: 1.7
        };

        expect(reducer(mockState, mockAction)).toStrictEqual(expected);
    });

    it('should handle SET_CURRENT_THEME_STORE when Light', () => {
        const mockAction = {
            type: 'set_current_theme_store',
            payload: 'Light'
        }
        const expected = {
            ...mockState,
            currentTheme: 'Light'
        }

        expect(reducer(mockState, mockAction)).toStrictEqual(expected);
    });

    it('should handle SET_CURRENT_THEME_STORE when Dark', () => {
        const mockAction = {
            type: 'set_current_theme_store',
            payload: 'Dark'
        }
        const expected = {
            ...mockState,
            currentTheme: 'Dark'
        }

        expect(reducer(mockState, mockAction)).toStrictEqual(expected);
    });
});