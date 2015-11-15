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
    TOGGLE_MENU: null,
    SHOW_MODAL: null,

    CREATE_NEW_POST: null,
    CREATE_NEW_COMMENT: null

  })
};