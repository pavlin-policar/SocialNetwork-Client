import AppDispatcher from '../dispatcher/AppDispatcher';
import PostConstants from '../constants/PostConstants';

const ActionTypes = PostConstants.ActionTypes;

export function createPost(post) {
  AppDispatcher.dispatchServerAction(ActionTypes.CREATE_POST, post);
}

export function createPost(post) {
  AppDispatcher.dispatchServerAction(ActionTypes.CREATE_POST, post);
}

export function createComment(comment) {
  AppDispatcher.dispatchServerAction(ActionTypes.CREATE_COMMENT, comment);
}