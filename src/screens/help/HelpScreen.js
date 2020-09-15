import React from 'react';
import {View, Text, Pressable} from 'react-native';

const HelpScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Pressable onPress={() => navigation.navigate('drawer')}>
        <Text>HelpScreen</Text>
      </Pressable>
    </View>
  );
};

export default HelpScreen;
