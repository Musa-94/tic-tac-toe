export interface ModalsState {
    [modalType: string]: {
        isShow: false,
        context: null,
        withBlur: true,
    }
}

export interface ModalData {
    isShow: boolean,
    context: ModalContext | null,
    withBlur: boolean,
}

export interface ModalContext {
    message: string
}
