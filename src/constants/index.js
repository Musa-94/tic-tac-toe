const constants = {};

export default Object.defineProperties(constants, {
   IS_LOADED                  : { value: 'is_loaded', writable: false },
   REQUEST_SEND               : { value: 'request_send', writable: false },
   IS_AUTHORIZED              : { value: 'is_authorized_store', writable: false },
   SET_CURRENT_USER_STORE     : { value: 'set_current_user_store', writable: false },

   SIGN_UP_MODAL_WINDOW_TYPE  : { value: 'sign_up_modal_window_type', writable: false },
   SIGN_IN_MODAL_WINDOW_TYPE  : { value: 'sign_in_modal_window_type', writable: false },

   OPEN_MODAL_WINDOW          : { value: 'open_modal_window', writable: false },
   CLOSE_MODAL_WINDOW         : { value: 'close_modal_window', writable: false },
});
