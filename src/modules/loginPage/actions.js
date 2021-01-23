import constants from '../../constants';

export const onOpenModalWindow = payload => ({ type: constants.OPEN_MODAL_WINDOW, payload });
export const onCloseModalWindow = payload => ({ type: constants.CLOSE_MODAL_WINDOW, payload });
