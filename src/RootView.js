import React from 'react';
import {View, StyleSheet, LogBox, KeyboardAvoidingView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
LogBox.ignoreLogs(['Remote debugger']);
const RootView = ({children}) => {
  return (
    // <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={[styles.container]}>{children}</View>
    // </KeyboardAvoidingView>
  );
};

export default RootView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
