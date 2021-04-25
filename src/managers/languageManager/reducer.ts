import constants from '../../constants';
import { configSite } from '../../config';
import { LanguageState, ChangeLanguageAction } from '../../types';

const initialState: LanguageState = {
    lang: configSite.defaultLanguage,
}

export default (state = initialState, action: ChangeLanguageAction): LanguageState => {
    switch (action.type) {
        case constants.ACTION_TYPES.CHANGE_LANGUAGE_STORE:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state;
    }
}
