import constants from '../../constants';
import { ThemeState, ThemeAction } from '../../types';

const initialState: ThemeState = {
    coefficient: 1,
    currentTheme: 'Dark'
}

export default (state = initialState, action: ThemeAction) => {
    switch (action.type) {
        case constants.SET_RESOLUTION_COEFFICIENT_STORE:
            return {
                ...state,
                coefficient: action.payload,
            };
        case constants.SET_CURRENT_THEME_STORE:
            return {
                ...state,
                currentTheme: action.payload
            }
        default:
            return state;
    }
}
