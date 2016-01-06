import request from 'superagent';

/**
 * Attach common params to each request such as the auth token and other global
 * configurations.
 *
 * @param request
 * @returns {*}
 */
function configureRequest(request) {
  // TODO add jwt security token for authentication, timeouts, ...
  return request;
}

export function get(url, data = {}, callback) {
  return configureRequest(request.get(url, data, callback));
}

export function post(url, data = {}, callback = null) {
  return configureRequest(request.post(url, data, callback));
}

export function put(url, data = {}, callback = null) {
  return configureRequest(request.put(url, data, callback));
}

export function del(url, callback = null) {
  return configureRequest(request.del(url, callback));
}