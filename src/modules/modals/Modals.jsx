import React, { useMemo } from 'react';
import constants from 'src/constants';
import { getModalStyles } from './logic';
import SignUpModalWindow from './components/SignUpModalWindow';

const Modals = props => {
    const {
        modals,
        closeModalWindow,
    } = props;

    const signUpModalData = modals[constants.SIGN_UP_MODAL_WINDOW_TYPE];
    // const signInModalData = modals[constants.SIGN_IN_MODAL_WINDOW_TYPE];

    const styles = useMemo(() => getModalStyles(), [getModalStyles]);

    const modalStyles = useMemo(() => ({
        content: {
            ...styles.content,
            width: 500,
        },
        overlay: {
            ...styles.overlay,
            background: 'rgba(0,0,0,0.5)',
        }
    }), [styles]);

    return (
        <>
            <SignUpModalWindow
                isShow={signUpModalData.isShow}
                styles={modalStyles}
                closeModalWindow={closeModalWindow}
            />
        </>
    )
}

export default React.memo(Modals);
