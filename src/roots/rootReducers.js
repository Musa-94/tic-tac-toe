import { combineReducers } from 'redux';

import modals from 'src/managers/modalsManager/reducer';
import loginPage from 'src/managers/loginPage/reducer';


export default combineReducers({
    modals,
    loginPage,
});
