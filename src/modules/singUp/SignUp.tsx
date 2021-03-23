import React from 'react';
import CustomButton from '../../components/customButton';
import { SingUpProps } from '../../types';
import { withLocalization } from '../../lang/localization';
import './signUpStyles.less';
// import { ThemeProvider } from 'styled-components';
import {
    Form,
    Content,
    Wrapper
} from './styledComponents';

const SignUp: React.FC<SingUpProps> = (props: SingUpProps): React.ReactElement => {
    const {
        t
    } = props;

    return (
            <Wrapper data-at={'wrapper'}>
                <Wrapper.header data-at={'container__header'}
                     children={t('registration')}
                />
                <Wrapper.Content data-at={'container__content'}>
                    <Content.Form data-at={'content'}>
                        <Form.input type={'text'}
                               title={t('enterLogin')}
                               required
                               data-at={'login input'}
                               placeholder={t('enterLogin')}
                        />
                        <Form.input type={'password'}
                               title={t('enterPassword')}
                               required
                               data-at={'input'}
                               placeholder={t('enterPassword')}
                        />
                        <Form.input type={'password'}
                               title={t('confirmThePassword')}
                               required
                               data-at={'input'}
                               placeholder={t('confirmThePassword')}
                        />
                        <CustomButton
                            textTitle={t('signUp')}
                        />
                    </Content.Form>
                </Wrapper.Content>
            </Wrapper>
    );
}

export default React.memo(withLocalization()(SignUp));
