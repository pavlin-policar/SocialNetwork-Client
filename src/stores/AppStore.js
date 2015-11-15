import EventEmitter from 'eventemitter3';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import { Map } from 'immutable';

const CHANGE_EVENT = 'change';
const ActionTypes = AppConstants.ActionTypes;

let _appState = Map({
  mainMenuVisible: false,
  modalVisible: false
});

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
      _appState = _appState.set('mainMenuVisible', true);
      instance.emitChange();
      break;

    case ActionTypes.HIDE_MENU:
      _appState = _appState.set('mainMenuVisible', false);
      instance.emitChange();
      break;

    case ActionTypes.TOGGLE_MENU:
      _appState =
          _appState.set('mainMenuVisible', !_appState.get('mainMenuVisible'));
      instance.emitChange();
      break;

    case ActionTypes.SHOW_MODAL:
      _appState = _appState.set('modalVisible', !_appState.get('modalVisible'));
      instance.emitChange();
      break;

    default:
    // nothing
  }
});

export default instance;