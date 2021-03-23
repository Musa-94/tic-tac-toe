import React from 'react';
import {
    Content,
    Wrapper,
    Container,
    SignInForm
} from './styledComponents';

const SignInPage = props => {
    return (
        <Wrapper data-at={'wrapper_sign-in-page'}>
            <Wrapper.overlay data-at={'sign-in-page_overlay'}/>
            <Container data-at={'sign-in-page_container'}>
                <Container.header data-at={'container_header'}/>
                <Content data-at={'container_content'}>
                    <SignInForm>
                        <SignInForm.input type={'text'}
                                          placeholder={'Введите логин...'}
                        />
                        <SignInForm.button type={'submit'}
                                           children={'Sign In'}
                        />
                    </SignInForm>
                </Content>
            </Container>
        </Wrapper>
    );
}

export default React.memo(SignInPage);
