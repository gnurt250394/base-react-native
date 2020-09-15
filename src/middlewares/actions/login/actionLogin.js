import actionTypes from '../actionTypes';
import apis from 'controllers/apis';
import {reset} from 'routers/RootNavigation';
import screenName from 'routers/screenName';
import {showMessage} from 'react-native-flash-message';

const _login = (payload) => {
  return {
    type: actionTypes.LOGIN,
    payload,
  };
};
const _logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
export const login = (userName, passWord) => {
  console.log('passWord: ', passWord);
  console.log('userName: ', userName);
  return (dispatch, getState) => {
    let params = {
      userName,
      passWord,
    };
    apis
      .post(apis.path.login, params)
      .then((res) => {
        if (res.status == 200) {
          console.log('res: ', res);
          showMessage({type: 'success', message: 'Đăng nhập thành công',icon:"success"});
          dispatch(_login(res.data.data));
          reset(screenName.HOME);
        }else{
          showMessage({type: 'danger', message: 'Đăng nhập thất bại',icon:'danger'});

        }
      })
      .catch((err) => {

      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    dispatch(_logout());
  };
};
