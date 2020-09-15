import actionTypes from 'middlewares/actions/actionTypes';
import {setAuthToken} from 'controllers/apis/requestMethod';

const initialState = {
  user: {},
  isLogin: false,
  count: 0,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      setAuthToken(action.payload.loginToken);
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userApp: {},
        isLogin: false,
      };
    case actionTypes.NOTIFICATION:
      return {
        ...state,
        count: action.count,
      };
    case 'persist/REHYDRATE':
      if (action?.payload?.userApp) {
        console.log('action?.payload: ', action?.payload);
        if (action?.payload?.userApp?.user.loginToken) {
          setAuthToken(action?.payload?.userApp?.user?.loginToken);
          return {
            ...state,
            ...action.payload.userApp,
            isLogin: true,
          };
        }

        return {
          ...state,
          ...action.payload.userApp,
        };
      }
    default:
      return state;
  }
};
export default loginReducer;
