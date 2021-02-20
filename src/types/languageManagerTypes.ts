export interface InitialState {
    lang: string;
}

export interface ChangeLanguageAction {
    type: string;
    payload: string;
}
