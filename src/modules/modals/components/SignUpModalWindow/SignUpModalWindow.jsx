import React, { useCallback } from 'react';
import Modal from 'react-modal';
import constants from 'src/constants';
import SignUp from 'src/modules/singUp';


const SignUpModalWindow = props => {
    const {
        isShow,
        styles,
        closeModalWindow,
    } = props;

    const onClose = useCallback(() => {
        closeModalWindow({
            type: constants.SIGN_UP_MODAL_WINDOW_TYPE,
        });
    }, [closeModalWindow]);

    return (
        <Modal
            style={styles}
            isOpen={isShow}
            children={<SignUp/>}
            ariaHideApp={false}
            onRequestClose={onClose}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        />
    );
}

export default React.memo(SignUpModalWindow);
