import React, {useEffect} from 'react';
import RouterApp from './src/router/';
import {NavigationContainer} from '@react-navigation/native';
import {configureGoogleSignIn} from './src/auth/googleAuth';
import Toast from 'react-native-toast-message';
import {View, Text} from 'react-native';

const toastConfig = {
  success: ({text1, text2}: any) => (
    <View
      style={{
        width: '92%',
        backgroundColor: '#ECFDF5',
        borderLeftWidth: 6,
        borderLeftColor: '#10B981',
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#065F46',
        }}>
        {text1}
      </Text>

      {text2 ? (
        <Text
          style={{
            fontSize: 14,
            color: '#065F46',
            marginTop: 4,
          }}>
          {text2}
        </Text>
      ) : null}
    </View>
  ),

  error: ({text1, text2}: any) => (
    <View
      style={{
        width: '92%',
        backgroundColor: '#FEF2F2',
        borderLeftWidth: 6,
        borderLeftColor: '#EF4444',
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 6,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#7F1D1D',
        }}>
        {text1}
      </Text>

      {text2 ? (
        <Text
          style={{
            fontSize: 14,
            color: '#7F1D1D',
            marginTop: 4,
          }}>
          {text2}
        </Text>
      ) : null}
    </View>
  ),
};

const App = () => {
  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <>
      <NavigationContainer>
        <RouterApp />
      </NavigationContainer>

      <Toast config={toastConfig} position="bottom" bottomOffset={40} />
    </>
  );
};

export default App;
