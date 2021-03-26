export interface LanguageState {
    lang: string;
}

export interface ChangeLanguageAction {
    type: string;
    payload: string;
}
