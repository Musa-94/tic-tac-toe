export interface ThemeState {
    coefficient: number;
    currentTheme: string;
}

export interface ThemeAction {
    type: string;
    payload?: number | string;
}

