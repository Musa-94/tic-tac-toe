import { combineReducers } from 'redux';

import theme from '../managers/themeManager/reducer';
import modals from '../managers/modalsManager/reducer';
import language from '../managers/languageManager/reducer';
import loginPage from '../managers/loginPageManager/reducer';
import windowData from '../managers/windowManager/reducer';
import ticTacToeGame from '../managers/ticTacToeManager/reducer';


export default combineReducers({
    theme,
    modals,
    language,
    loginPage,
    windowData,
    ticTacToeGame,
});
