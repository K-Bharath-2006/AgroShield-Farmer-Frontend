import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './style';
import {googleSignIn} from '../../auth/googleAuth';
import {loginUser} from './utils';
import {RootStackParamList} from '../../router/types';
import Toast from 'react-native-toast-message';

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const handleLogin = async () => {
    try {
      const {idToken} = await googleSignIn();
      const data = await loginUser(idToken);

      // 🔐 Store JWT for later protected calls
      global.authToken = data.token;

      if (data.isNewUser) {
        navigation.replace('Registration', {
          user: data.user,
        });
      } else {
        navigation.replace('Home', {user: data.user});
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: error?.message || 'Something went wrong',
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in with your Google account</Text>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;