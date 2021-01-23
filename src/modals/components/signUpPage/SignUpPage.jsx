import React, { useCallback } from 'react';
import Modal from 'react-modal';

import constants from '../../../constants';
import CustomButton from '../../../components/customButton';
import './signUpPageStyles.less';

const getContent = () => {
    return (
        <>
            <div className={'container__header'}
                 children={'Регистрация'}
            />
            <div className={'container'}>
                <form className={'content'}>
                    <input type={'text'}
                           className={'login input'}
                           placeholder={'Введите логин...'}
                    />
                    <input type={'password'}
                           className={'input'}
                           placeholder={'Введите пароль'}
                    />
                    <input type={'password'}
                           className={'input'}
                           placeholder={'Подтвердите пароль'}
                    />
                    <CustomButton
                        textTitle={'Sign Up'}
                    />
                </form>
            </div>
        </>
    )
}

const SignUpPage = props => {
    const {
        isShow,
        styles,
        closeModalWindow,
    } = props;

    const onClose = useCallback(() => {
        closeModalWindow({
            type: constants.SIGN_UP_MODAL_WINDOW_TYPE,
        });
    }, [closeModalWindow])

    return (
        <Modal
            style={styles}
            isOpen={isShow}
            children={getContent()}
            ariaHideApp={false}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
        />
    );
}

export default React.memo(SignUpPage);
