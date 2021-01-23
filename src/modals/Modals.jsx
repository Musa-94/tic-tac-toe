import React from 'react';
import constants from '../constants';
import SignUpPage from './components/signUpPage';

const Modals = props => {
    const {
        modals,
        closeModalWindow,
    } = props;

    const signUpModalData = modals[constants.SIGN_UP_MODAL_WINDOW_TYPE];
    const signINModalData = modals[constants.SIGN_IN_MODAL_WINDOW_TYPE];

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };

    return (
        <>
            <SignUpPage
                isShow={signUpModalData.isShow}
                styles={customStyles}
                closeModalWindow={closeModalWindow}
            />
        </>
    )
}

export default React.memo(Modals);
