import EventEmitter from 'eventemitter3';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { Map } from 'immutable';

const CHANGE_EVENT = 'change';
const ActionTypes = AppConstants.ActionTypes;

let _appState = Map({
  mainMenuVisible: false,
  modalVisible: false,
  overlayVisible: false,
  notificationMenuVisible: false,
  messageMenuVisible: false
});

function resetAllOverlays() {
  _appState = _appState.set('mainMenuVisible', false);
  _appState = _appState.set('modalVisible', false);
  _appState = _appState.set('overlayVisible', false);
  _appState = _appState.set('notificationMenuVisible', false);
  _appState = _appState.set('messageMenuVisible', false);
}

class AppStore extends EventEmitter {
  constructor() {
    super();
  }

  getMainMenuVisible() {
    return _appState.get('mainMenuVisible');
  }

  getModalVisible() {
    return _appState.get('modalVisible');
  }

  getOverlayVisible() {
    return _appState.get('overlayVisible');
  }

  getNotificationMenuVisible() {
    return _appState.get('notificationMenuVisible');
  }

  getMessageMenuVisible() {
    return _appState.get('messageMenuVisible');
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const instance = new AppStore();

instance.dispatchToken = AppDispatcher.register(action => {
  switch (action.type) {
    case ActionTypes.SHOW_MENU:
      resetAllOverlays();
      _appState = _appState.set('mainMenuVisible', true);
      _appState = _appState.set('overlayVisible', true);
      instance.emitChange();
      break;

    case ActionTypes.HIDE_MENU:
      _appState = _appState.set('mainMenuVisible', false);
      _appState = _appState.set('overlayVisible', false);
      instance.emitChange();
      break;

    case ActionTypes.SHOW_MODAL:
      _appState = _appState.set('modalVisible', true);
      instance.emitChange();
      break;

    case ActionTypes.HIDE_MODAL:
      _appState = _appState.set('modalVisible', false);
      instance.emitChange();
      break;

    case ActionTypes.TOGGLE_HEADER_NOTIFICATION_MENU:
      let nmv = _appState.get('notificationMenuVisible');
      resetAllOverlays();
      _appState = _appState.set('notificationMenuVisible', !nmv);
      instance.emitChange();
      break;

    case ActionTypes.TOGGLE_HEADER_MESSAGE_MENU:
      let mmv = _appState.get('messageMenuVisible');
      resetAllOverlays();
      _appState = _appState.set('messageMenuVisible', !mmv);
      instance.emitChange();
      break;

    default:
    // nothing
  }
});

export default instance;