import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const ActionTypes = AppConstants.ActionTypes;

export function showMenu() {
  AppDispatcher.dispatchViewAction(ActionTypes.SHOW_MENU);
}

export function hideMenu() {
  AppDispatcher.dispatchViewAction(ActionTypes.HIDE_MENU);
}

export function showModal() {
  AppDispatcher.dispatchViewAction(ActionTypes.SHOW_MODAL);
}