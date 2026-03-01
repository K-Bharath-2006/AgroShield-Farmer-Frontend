import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const EntranceScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#064E3B" barStyle="light-content" />

      <Text style={styles.title}>Welcome to Agro Shield 🌾</Text>
      <Text style={styles.subtitle}>
        Register Crops, Calculate Premiums & Raise Insurance Claims Easily
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Let’s Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EntranceScreen;
