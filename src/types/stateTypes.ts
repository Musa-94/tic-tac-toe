import {
    ThemeState,
    WindowState,
    ModalsState,
    LanguageState,
    LoginPageState,
    TicTacToeState,
} from './index';

export interface State {
    theme: ThemeState;
    modals: ModalsState;
    language: LanguageState;
    loginPage: LoginPageState;
    windowData: WindowState;
    ticTacToeGame: TicTacToeState;
}
