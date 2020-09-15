import requestMethod from './requestMethod';

export default {
  path: {
    login: '/auth/login',
    detail_user: '/user/detail',
  },
  fetch: requestMethod.fetch,
  put: requestMethod.put,
  post: requestMethod.post,
  postForm: requestMethod.postForm,
};
