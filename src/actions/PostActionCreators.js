import AppDispatcher from '../dispatcher/AppDispatcher';
import PostConstants from '../constants/PostConstants';

const ActionTypes = PostConstants.ActionTypes;

export function createComment(comment) {
  AppDispatcher.dispatchServerAction(ActionTypes.CREATE_COMMENT, comment);
}