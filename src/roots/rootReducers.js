import { combineReducers } from 'redux';

import theme from 'src/managers/themeManager/reducer';
import modals from 'src/managers/modalsManager/reducer';
import loginPage from 'src/managers/loginPage/reducer';
import language from 'src/managers/languageManager/reducer';
import windowData from 'src/managers/windowManager/reducer';


export default combineReducers({
    theme,
    modals,
    language,
    loginPage,
    windowData,
});
