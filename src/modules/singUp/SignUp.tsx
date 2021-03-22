import React from 'react';
import CustomButton from '../../components/customButton';
import { SingUpProps } from '../../types';
import { withLocalization } from '../../lang/localization';
import './signUpStyles.less';
// import { ThemeProvider } from 'styled-components';
import { Content,
         Container,
         SignUpForm,
         WrapperSignUp } from './styledComponents';

const SignUp: React.FC<SingUpProps> = (props: SingUpProps): React.ReactElement => {
    const {
        t
    } = props;

    return (
            <WrapperSignUp data-at={'wrapper'}>
                <Container.header data-at={'container__header'}
                     children={t('registration')}
                />
                <Content data-at={'container__content'}>
                    <SignUpForm data-at={'content'}>
                        <SignUpForm.input type={'text'}
                               title={t('enterLogin')}
                               required
                               className={'login input'}
                               placeholder={t('enterLogin')}
                        />
                        <SignUpForm.input type={'password'}
                               title={t('enterPassword')}
                               required
                               className={'input'}
                               placeholder={t('enterPassword')}
                        />
                        <SignUpForm.input type={'password'}
                               title={t('confirmThePassword')}
                               required
                               className={'input'}
                               placeholder={t('confirmThePassword')}
                        />
                        <CustomButton
                            textTitle={t('signUp')}
                        />
                    </SignUpForm>
                </Content>
            </WrapperSignUp>
    );
}

export default React.memo(withLocalization()(SignUp));
