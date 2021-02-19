import React from 'react';
import CustomButton from 'src/components/customButton';
import { withLocalization } from 'src/lang/localization';
import './signUpStyles.less';

const SignUp = props => {
    const {
        t
    } = props;

    return (
        <div className={'wrapper'}>
            <div className={'container__header'}
                 children={t('registration')}
            />
            <div className={'container__content'}>
                <form className={'content'}>
                    <input type={'text'}
                           title={'Введите логин'}
                           required
                           className={'login input'}
                           placeholder={t('enterLogin')}
                    />
                    <input type={'password'}
                           title={'Введите пароль'}
                           required
                           className={'input'}
                           placeholder={t('enterPassword')}
                    />
                    <input type={'password'}
                           title={'Введите подтвержденние пароля'}
                           required
                           className={'input'}
                           placeholder={t('confirmThePassword')}
                    />
                    <CustomButton
                        textTitle={t('signUp')}
                    />
                </form>
            </div>
        </div>
    )
}

export default React.memo(withLocalization()(SignUp));
