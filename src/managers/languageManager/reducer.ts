import constants from '../../constants';
import { InitialState, ChangeLanguageAction } from '../../types';

const initialState: InitialState = {
    lang: 'en',
}

export default (state = initialState, action: ChangeLanguageAction): InitialState => {
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
