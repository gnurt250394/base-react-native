// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import HomeScreen from 'screens/home/HomeScreen';
import LoginScreen from 'screens/auth/LoginScreen';
import RegisterScreen from 'screens/auth/RegisterScreen';
import HeaderTitle from 'components/HeaderTitle';
import HeaderBackground from 'components/HeaderBackground';
import HelpScreen from 'screens/help/HelpScreen';
import screenName from './screenName';
import {navigationRef, isReadyRef} from './RootNavigation';
import SplashScreen from 'screens/SplashScreen';
import {
  createCollapsibleStack,
  // disableExpoTranslucentStatusBar,
} from 'react-navigation-collapsible';
const RootStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const getHeaderTitle = (route) => {
  const routeName = route.name ?? screenName.HOME;

  switch (routeName) {
    case screenName.HOME:
      return 'Trang chủ';
    case screenName.LOGIN:
      return 'Đăng nhập';
    case screenName.HELP:
      return 'Trợ giúp';
    case screenName.REGISTER:
      return 'Đăng ký';
    case screenName.SPLASH:
      return 'Splash';
  }
};
function showHeader(route) {
  const routeName = route.name ?? screenName.SPLASH;

  switch (routeName) {
    case screenName.SPLASH:
      return false;
    default:
      return true;
  }
}
function TabsStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === screenName.HOME) {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === screenName.HELP) {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={screenName.HOME} component={HomeScreen} />
      <Tab.Screen name={screenName.HELP} component={HelpScreen} />
    </Tab.Navigator>
  );
}

// Define multiple groups of screens in objects like this
const commonScreens = {
  help: HelpScreen,
};

const userScreens = {
  splash: SplashScreen,
  home: HomeScreen,
  login: LoginScreen,
  register: RegisterScreen,
};

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'blue',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function RootApp() {
  React.useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer
      theme={MyTheme}
      onReady={() => {
        isReadyRef.current = true;
      }}
      // onStateChange={(state) => {
      //   const previousRouteName = routeNameRef.current;
      //   const currentRouteName = getActiveRouteName(state);

      //   if (previousRouteName !== currentRouteName) {
      //     analytics().setCurrentScreen(currentRouteName, currentRouteName);
      //   }
      // }}
      ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName={screenName.SPLASH}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}>
        {Object.entries({
          // Use the screens normally
          ...commonScreens,
          // Use some screens conditionally based on some condition
          ...userScreens,
        }).map(([name, component], index) => {
          return (
            <RootStack.Screen
              key={index}
              name={name}
              options={({route}) => ({
                headerTitle: getHeaderTitle(route),
                animationEnabled: true,
                headerShown: showHeader(route),
              })}
              component={component}
            />
          );
        })}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootApp;
