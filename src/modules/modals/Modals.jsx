import React, { useMemo } from 'react';
import constants from 'src/constants';
import { getModalStyles } from './logic';
import SignUpPage from './components/signUpPage';

const Modals = props => {
    const {
        modals,
        closeModalWindow,
    } = props;

    const signUpModalData = modals[constants.SIGN_UP_MODAL_WINDOW_TYPE];
    const signINModalData = modals[constants.SIGN_IN_MODAL_WINDOW_TYPE];

    const styles = useMemo(() => getModalStyles(), [getModalStyles]);

    const modalStyles = {
        content: {
            ...styles.content,
            width: 500,
        },
        overlay: {
            ...styles.overlay,
            background: 'rgba(0,0,0,0.5)',
        }
    }

    return (
        <>
            <SignUpPage
                isShow={signUpModalData.isShow}
                styles={modalStyles}
                closeModalWindow={closeModalWindow}
            />
        </>
    )
}

export default React.memo(Modals);
