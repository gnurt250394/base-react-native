import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Kohana, Sae, Fumi} from 'react-native-textinput-effects';
import R from 'res/R';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {login} from 'middlewares/actions/login/actionLogin';
const {height, width} = Dimensions.get('window');
const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  const [passWord, setPassWord] = React.useState('');
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(login(userName, passWord));
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Fumi
          label={'Tên tài khoản'}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={'#f95a25'}
          iconSize={20}
          style={[styles.input, {marginBottom: 10}]}
          value={userName}
          onChangeText={setUserName}
          iconWidth={40}
          inputPadding={16}
        />
        <Fumi
          label={'Mật khẩu'}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          style={styles.input}
          iconColor={'#f95a25'}
          iconSize={20}
          value={passWord}
          onChangeText={setPassWord}
          iconWidth={40}
          inputPadding={16}
        />
        <TouchableOpacity onPress={onLogin} style={styles.buttonLogin}>
          <Text style={styles.txtLogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  txtLogin: {
    color: R.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonLogin: {
    height: 55,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: R.colors.cadetblue,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: '#00000060',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.6,
    elevation: 2,
  },
  input: {
    width: '70%',
    borderRadius: 5,
    borderColor: '#f95a2550',
    borderWidth: 1,
    height: 42,
  },
});
