import keyMirror from 'keymirror';

export default {

  PayloadSources: keyMirror({
    VIEW_ACTION: null,
    SERVER_ACTION: null
  }),

  ActionTypes: keyMirror({

    REDIRECT: null,

    SHOW_MENU: null,
    HIDE_MENU: null,
    SHOW_MODAL: null,
    HIDE_MODAL: null,
    TOGGLE_HEADER_NOTIFICATION_MENU: null,
    TOGGLE_HEADER_MESSAGE_MENU: null,

    CREATE_NEW_POST: null,
    CREATE_NEW_COMMENT: null

  })
};