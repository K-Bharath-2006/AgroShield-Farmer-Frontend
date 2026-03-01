import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface MobileNumberInputProps {
  value?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  setIsFocused: (focused: boolean) => void;
  label?: string;
  placeHolder?: string;
  keyboardType?: any;
  isFocused?: any;
}

const MobileNumberInput: React.FC<MobileNumberInputProps> = ({
  onChangeText,
  placeHolder,
  value,
  keyboardType,
  isFocused,
  label,
  setIsFocused,
}) => {
  return (
    <View style={styles.container}>
      {isFocused || value ? (
        <Text style={styles.labelFocused}>{label}</Text>
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
      <View style={styles.countryCodeContainer}>
        <Image
          source={require('../../../assets/flag.png')}
          style={styles.flag}
        />
        <Text style={styles.callingCode}>+966</Text>
        <TouchableOpacity>
          <Image source={require('../../../assets/dropDown.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        placeholder={isFocused ? placeHolder : ''}
        keyboardType={keyboardType}
        value={value}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8ECEF',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
  label: {
    position: 'absolute',
    bottom: 25,
    left: 116,
    color: '#4E585E',
    fontWeight: '400',
    fontSize: 14,
  },
  labelFocused: {
    position: 'absolute',
    bottom: 45,
    left: 116,
    color: '#4E585E',
    fontWeight: '400',
    fontSize: 14,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  callingCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#02111A',
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#C0C0C0',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#02111A',
  },
});

export default MobileNumberInput;
