import {persistStore, persistReducer} from 'redux-persist';
import allReducer from 'middlewares/reducers';
import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage'
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};

const loggerMiddleware = createLogger();
const logger = (store) => (next) => (action) => {
  let result = next(action);
  return result;
};
const store = createStore(
  persistReducer(persistConfig, allReducer),
  {},
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware, logger)),
);

export default () => {
  let persistor = persistStore(store);
  return {store, persistor};
};
