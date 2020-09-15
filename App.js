/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import RootView from './src/RootView';
import RootApp from './src/routers';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from 'middlewares/stores';
import FlashMessage from 'react-native-flash-message';
let {store, persistor} = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootView>
          <RootApp></RootApp>
          <FlashMessage useRef="myLocalFlashMessage" />
        </RootView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;

