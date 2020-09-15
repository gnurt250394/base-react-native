import Axios from 'axios';
const HOST = 'http://192.168.1.5:8786';
const BASE_URL = HOST + '/api/';
let headers = {
  'Content-Type': 'application/json',
};
const SERVER_TIMEOUT = 10000;
let constants = Axios.create({
  baseURL: BASE_URL,
  timeout: SERVER_TIMEOUT,
});
export function setAuthToken(token) {
  console.log('token: ', token);
  constants.defaults.headers.common['Authorization'] = '';
  delete constants.defaults.headers.common['Authorization'];

  if (token) {
    constants.defaults.headers.common['Authorization'] = `${token}`;
  }
}
function logError(error) {
  console.log('error: ', error);
  console.group &&
    console.group(
      '%cAPI ERROR',
      'color:white;font-weight:bold;background:red;padding:2px 6px',
    );
  if (error.response) {
    const apiName = error.config.apiName || 'UNKNOWN';

    console.log(apiName, error.response);
    console.groupEnd && console.groupEnd();
  } else if (error.request) {
    const apiName = error.config.headers.X_HEADER_API_LOG || 'UNKNOWN';

    console.log(apiName, error.request);
    console.groupEnd && console.groupEnd();
  } else {
    console.log('API Error', error.message);
    console.groupEnd && console.groupEnd();
  }
}
function logResponse(res) {
  console.group &&
    console.group(
      '%cAPI Response',
      'color:white;font-weight:bold;background:green;padding:2px 6px',
    );
  console.log('res: ', res);
  console.groupEnd && console.groupEnd();
}
function fetch(url, params) {
  return constants
    .get(url, {
      params,
      headers
    })
    .then((res) => {
      logResponse(res);
      return res;
    })
    .catch((error) => {
      logError(error);
      return error;
    });
}
function put(url, params) {
  return constants
    .put(url, params, {
      headers,
    })
    .then((res) => {
      logResponse(res);
      return res;
    })
    .catch((error) => {
      logError(error);
      return error;
    });
}
function post(url, params) {
  return constants
    .post(url, params, {
      headers,
    })
    .then((res) => {
      logResponse(res);
      return res;
    })
    .catch((error) => {
      logError(error);
      return error;
    });
}
function postForm(url, params) {
  let form = new FormData();
  if (typeof params == 'object') {
    Object.keys(params).map((key) => {
      form.append(key, params[key]);
    });
  }

  headers['Content-Type'] = 'multipart/form-data';
  return constants
    .post(url, params, {
      headers,
    })
    .then((res) => {
      logResponse(res);
      return res;
    })
    .catch((error) => {
      logError(error);
      return error;
    });
}
function removeRequest(url) {
  return constants
    .delete(url, {
      headers,
    })
    .then((res) => {
      logResponse(res);
      return res;
    })
    .catch((error) => {
      logError(error);
      return error;
    });
}
export default {
  fetch,
  put,
  post,
  removeRequest,
  BASE_URL,
  postForm,
};
