import { combineReducers } from 'redux';

import modals from '../managers/modalsManager/reducer';
import loginPage from '../managers/loginPage/reducer';


export default combineReducers({
    modals,
    loginPage,
});
