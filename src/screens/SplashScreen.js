import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {navigate, reset} from 'routers/RootNavigation';
import {useSelector} from 'react-redux';
import screenName from 'routers/screenName';
const SplashScreen = ({navigation}) => {
  const userApp = useSelector((state) => state.userApp);
  console.log('userApp: ', userApp);
  useEffect(() => {
    setTimeout(() => {
      if (userApp.isLogin) {
        reset(screenName.HOME);
      } else {
        reset(screenName.LOGIN);
      }
    }, 2000);
  }, []);
  return (
    <MaskedView
      style={{flex: 1, flexDirection: 'row', height: '100%'}}
      maskElement={
        <View
          style={{
            // Transparent background because mask is based off alpha channel.
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              fontWeight: 'bold',
            }}>
            APP DEMO
          </Text>
        </View>
      }>
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <Image
        source={{
          uri:
            'https://live.staticflickr.com/7491/15192147744_a552734f63_b.jpg',
        }}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'center',
        }}
      />
    </MaskedView>
  );
};

export default SplashScreen;
