import {combineReducers, createStore} from 'redux';
import loginReducer from './loginReducer';
const allReducer = combineReducers({userApp: loginReducer});
export default allReducer;
