import { Dispatcher } from 'flux';
import AppConstants from '../constants/AppConstants';

const PayloadSources = AppConstants.PayloadSources;

class AppDispatcher extends Dispatcher {

  /**
   * Dispatches a view action.
   *
   * @param type Action Type
   * @param action Action payload
   */
  dispatchViewAction(type, action = {}) {
    console.log(PayloadSources.VIEW_ACTION, type, action);
    if (!type) {
      throw new Error('You forgot to specify type.');
    }
    super.dispatch({
      source: PayloadSources.VIEW_ACTION,
      type: type,
      action: action
    });
  }

  /**
   * Dispatches a server action.
   *
   * @param type Action Type
   * @param action Action payload
   */
  dispatchServerAction(type, action = {}) {
    console.log(PayloadSources.SERVER_ACTION, type, action);
    if (!type) {
      throw new Error('You forgot to specify type.');
    }
    super.dispatch({
      source: PayloadSources.SERVER_ACTION,
      type: type,
      action: action
    });
  }

}

export default new AppDispatcher();
