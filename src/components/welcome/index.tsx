import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import styles from './style';

interface WelcomeProps {
  rootStyle?: ViewStyle;
  [key: string]: any;
}

const Welcome: React.FC<WelcomeProps> = props => {
  const {rootStyle = {}, ...rest} = props;

  return (
    <View style={[styles.container, rootStyle]} {...rest}>
      <Text>Welcome component</Text>
    </View>
  );
};

export {Welcome};
