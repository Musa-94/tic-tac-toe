import constants from 'src/constants';

const initialState = {
    coefficient: 1,
    currentTheme: 'Dark'
}

export default (state = initialState, action) => {
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
