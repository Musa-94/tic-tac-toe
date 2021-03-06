import constants from 'src/constants';

const initialState = {
    [constants.SIGN_UP_MODAL_WINDOW_TYPE]: {
        isShow: false,
        context: null,
        withBlur: true,
    },
    [constants.SIGN_IN_MODAL_WINDOW_TYPE]: {
        isShow: false,
        context: null,
        withBlur: true,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.OPEN_MODAL_WINDOW: {
            const { type } = action.payload;

            return {
                ...state,
                [type]: {
                    ...state[type],
                    isShow: true,
                }
            }
        }
        case constants.CLOSE_MODAL_WINDOW: {
            const { type } = action.payload;
            return {
                ...state,
                [type]: {
                    ...state[type],
                    isShow: false,
                }
            }
        }
        default:
            return state;
    }
}
