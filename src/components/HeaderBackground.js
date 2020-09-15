import React from 'react';
import {Image, View,StatusBar} from 'react-native';
const HeaderBackground = () => {
  return (
    <View>
        <StatusBar barStyle="light-content"/>
      <Image
        source={{
          uri:
            'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
        }}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  );
};

export default HeaderBackground;
