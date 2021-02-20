import React from 'react';
import CustomButton from '../../components/customButton';
import { SingUpProps } from '../../types';
import { withLocalization } from '../../lang/localization';
import './signUpStyles.less';

const SignUp: React.FC<SingUpProps> = (props: SingUpProps): React.ReactElement => {
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
    );
}

export default React.memo(withLocalization()(SignUp));
