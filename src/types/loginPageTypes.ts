export interface LoginPageState {
    isLoaded: boolean;
    currentUser: CurrentUser | null;
    isAuthorized: boolean;
}

export interface CurrentUser {
    name: string;
    mail: string;
}

export interface SetCurrentUserAction<T> {
    type: string;
    payload: T;
}
