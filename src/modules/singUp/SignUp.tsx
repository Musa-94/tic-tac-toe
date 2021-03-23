import React from 'react';
import CustomButton from '../../components/customButton';
import { withLocalization } from '../../lang/localization';
import {
    Form,
    Content,
    Wrapper,
} from './styledComponents';

type TProps = {
    t: Function
};

const SignUp: React.FC<TProps> = props => {
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
};

export default React.memo(withLocalization()(SignUp));
