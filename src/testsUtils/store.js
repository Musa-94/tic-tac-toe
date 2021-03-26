import { getCurrentWindowSize } from '../managers/windowManager/logic';

export default {
    language: {
        lang: 'en'
    },
    loginPage: {
        isLoaded: false,
        currentUser: null,
        isAuthorized: false,
    },
    modals: {
        'sign_in_modal_window_type': {
            isShow: false,
            context: null,
            withBlur: true,
        },
        'sign_up_modal_window_type': {
            isShow: false,
            context: null,
            withBlur: true,
        },
    },
    theme: {
        coefficient: 1,
        currentTheme: 'Dark',
    },
    ticTacToeGame: {
        gameBoard: {
            0: ['', '', ''],
            1: ['', '', ''],
            2: ['', '', ''],
        },
        playerSymbol: 'x'
    },
    windowData: {
        resolution: 'resolution_other',
        windowSize: getCurrentWindowSize()
    }
}
