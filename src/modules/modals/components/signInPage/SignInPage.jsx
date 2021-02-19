import React from 'react';

const SignInPage = props => {
    return (
        <div className={'wrapper_sign-in-page'}>
            <div className={'sign-in-page_overlay'}/>
            <div className={'sign-in-page_container'}>
                <div className={'container_header'}/>
                <div className={'container_content'}>
                    <form>
                        <input type={'text'}
                               placeholder={'Введите логин...'}
                        />
                        <input type={'password'}
                               placeholder={'Введите пароль'}
                        />
                        <input type={'password'}
                               placeholder={'Подтвердите пароль'}
                        />
                        <button type={'submit'}
                                children={'Sign In'}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default React.memo(SignInPage);
