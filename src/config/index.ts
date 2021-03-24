export const configSite = {
    languages: ['ru', 'en'],
    defaultLanguage: 'en',
    logInPage: {
        signUp: [
            {
                id: 1,
                type: 'email',
                placeholder: 'enterEmail'
            },
            {
                id: 2,
                type: 'password',
                placeholder: 'enterPassword'
            },
            {
                id: 3,
                type: 'confirmThePassword',
                placeholder: 'confirmThePassword'
            },
        ],
        signIn: [
            {
                type: 'email',
                placeholder: 'enterEmail'
            }
        ]
    }
}
