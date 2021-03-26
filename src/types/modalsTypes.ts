export interface ModalsState {
    [modalType: string]: ModalData,
}

export interface ModalData {
    isShow: boolean,
    context: ModalContext | null,
    withBlur: boolean,
}

export interface ModalContext {
    message: string,
}
