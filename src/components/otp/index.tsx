import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import styles from './style';

interface OtpProps {
  rootStyle?: ViewStyle;
  [key: string]: any;
}

const Otp: React.FC<OtpProps> = props => {
  const {rootStyle = {}, ...rest} = props;

  return (
    <View style={[styles.container, rootStyle]} {...rest}>
      <Text>Otp component</Text>
    </View>
  );
};

export {Otp};
