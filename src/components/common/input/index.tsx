import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

interface CustomTextInputProps {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isFocused: boolean;
  label?: string;
  setIsFocused: (focused: boolean) => void;
  placeHolder?: string;
  multiline?: boolean;
  keyboardType?: any;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  isFocused,
  label,
  setIsFocused,
  onChangeText,
  placeHolder,
  value,
  multiline,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      {isFocused || value ? (
        <Text style={styles.labelFocused}>{label}</Text>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
      <TextInput
        style={[styles.inputStyle, multiline && styles.multiline]}
        value={value}
        placeholder={isFocused ? placeHolder : ''}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    color: '#4E585E',
    fontWeight: '400',
    fontSize: 14,
  },
  labelFocused: {
    position: 'absolute',
    bottom: 45,
    left: 20,
    color: '#4E585E',
    fontWeight: '400',
    fontSize: 14,
  },
  labelFocusedMultiline: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    color: '#4E585E',
    fontWeight: '400',
    fontSize: 14,
  },
  inputStyle: {
    padding: 20,
    borderColor: '#D9DBDD',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#02111A',
    flex: 1,
    fontWeight: '500',
    marginTop: 20,
  },
  multiline: {
    paddingVertical: 20,
  },
});

export default CustomTextInput;
