import React from 'react';
import { CustomButton } from '../../components';
import { withLocalization } from '../../lang/localization';
import { configSite } from '../../config';
import {
    Form,
    Content,
    Wrapper,
} from './styledComponents';
import { ThemeProvider } from 'styled-components';

type TProps = {
    t: Function,
    coefficient: number,
};

const SignUp: React.FC<TProps> = props => {
    const {
        t,
        coefficient,
    } = props;
    const { signUp } = configSite.logInPage;
    const theme = {
        coefficient
    }

    return (
        <ThemeProvider theme={theme}>
            <Wrapper data-at={'wrapper'}>
            <Wrapper.header data-at={'wrapper_header'}
                            children={t('registration')}
            />
            <Wrapper.Content data-at={'wrapper_content'}>
                <Content.Form data-at={'content_form'}>
                    {
                        signUp.map(({ id, type, placeholder }) =>
                            <Form.input key={id}
                                        type={type}
                                        title={t(placeholder)}
                                        required
                                        data-at={'form_input'}
                                        placeholder={t(placeholder)}
                            />
                        )
                    }
                    <CustomButton
                        textTitle={t('signUp')}
                    />
                </Content.Form>
            </Wrapper.Content>
        </Wrapper>
        </ThemeProvider>
    );
};

export default React.memo(withLocalization()(SignUp));
