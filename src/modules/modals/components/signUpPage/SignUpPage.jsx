import React, { useCallback } from 'react';
import Modal from 'react-modal';

import constants from 'src/constants';
import CustomButton from 'src/components/customButton';
import './signUpPageStyles.less';

const getContent = () => {
    return (
        <div className={'wrapper'}>
            <div className={'container__header'}
                 children={'Регистрация'}
            />
            <div className={'container__content'}>
                <form className={'content'}>
                    <input type={'text'}
                           title={'Введите логин'}
                           required
                           className={'login input'}
                           placeholder={'Введите логин...'}
                    />
                    <input type={'password'}
                           title={'Введите пароль'}
                           required
                           className={'input'}
                           placeholder={'Введите пароль'}
                    />
                    <input type={'password'}
                           title={'Введите подтвержденние пароля'}
                           required
                           className={'input'}
                           placeholder={'Подтвердите пароль'}
                    />
                    <CustomButton
                        textTitle={'Sign Up'}
                    />
                </form>
            </div>
        </div>
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
    }, [closeModalWindow]);

    return (
        <Modal
            style={styles}
            isOpen={isShow}
            children={getContent()}
            ariaHideApp={false}
            onRequestClose={onClose}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        />
    );
}

export default React.memo(SignUpPage);
