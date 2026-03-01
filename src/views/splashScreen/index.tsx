/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Entrance');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#064E3B" barStyle="light-content" />

      <Text style={styles.logo}>Agro Shield 🌾</Text>
      <Text style={styles.tagline}>
        Protecting Your Crops. Securing Your Future.
      </Text>
    </View>
  );
};

export default SplashScreen;
