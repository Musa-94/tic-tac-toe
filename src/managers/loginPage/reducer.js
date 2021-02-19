import constants from 'src/constants';

const initialState = {
    isLoaded: false,
    currentUser: null,
    isAuthorized: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.IS_LOADED:
            return {
                ...state,
                isLoaded: !state.isLoaded,
            }
        case constants.isAuthorized:
            return {
                ...state,
                isAuthorized: !state.isAuthorized,
            }
        case constants.SET_CURRENT_USER_STORE:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state;
    }
}
