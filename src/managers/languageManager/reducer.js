import constants from 'src/constants';

const initialState = {
    lang: 'en',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.CHANGE_LANGUAGE_STORE:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }
}
