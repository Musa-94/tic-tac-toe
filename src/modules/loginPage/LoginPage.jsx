import React, { useEffect } from 'react';
import constants from 'src/constants';

const LoginPage = props => {
    const {
        openModalWindow,
        closeModalWindow,
    } = props;

    useEffect(() => {
        openModalWindow({
            type: constants.SIGN_UP_MODAL_WINDOW_TYPE,
        });
        return () => {
            closeModalWindow({
                type: constants.SIGN_UP_MODAL_WINDOW_TYPE,
            });
        }
    }, [openModalWindow])
    return (
        <h1>LOGIN PAGE</h1>
    )
}

export default React.memo(LoginPage);
