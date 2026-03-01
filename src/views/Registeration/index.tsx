import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import styles from './style';
import {registerUser} from './utils';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';
import districtTalukData from './../../data/districtTaluk';
import Toast from 'react-native-toast-message';

type RegisterNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Registration'
>;

const Register = () => {
  const navigation = useNavigation<RegisterNavigationProp>();
  const route = useRoute<any>();
  const user = route.params?.user;

  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState<string | null>(null);
  const [taluk, setTaluk] = useState<string | null>(null);

  const [districtModal, setDistrictModal] = useState(false);
  const [talukModal, setTalukModal] = useState(false);

  const handleRegister = async () => {
    if (!name || !phone || !district || !taluk) {
      Toast.show({
        type: 'error',
        text1: 'Missing Fields',
        text2: 'All fields are required',
      });
      return;
    }

    try {
      const userData = await registerUser({
        name,
        phoneNumber: phone,
        district,
        taluk,
      });

      Toast.show({
        type: 'success',
        text1: 'Registration Successful',
        text2: 'Welcome to Agro-Shield 🌾',
      });

      navigation.replace('Home', {user: userData.user});
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Registration Failed',
        text2: error?.message || 'Something went wrong',
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>Complete Registration</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={[styles.input, styles.disabledInput]}
          value={user?.email || ''}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#9CA3AF"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* District Selector */}
        <TouchableOpacity
          style={styles.selector}
          onPress={() => setDistrictModal(true)}>
          <Text style={district ? styles.selectedText : styles.placeholderText}>
            {district || 'Select District'}
          </Text>
        </TouchableOpacity>

        {/* Taluk Selector */}
        <TouchableOpacity
          style={styles.selector}
          onPress={() => district && setTalukModal(true)}>
          <Text style={taluk ? styles.selectedText : styles.placeholderText}>
            {taluk || 'Select Taluk'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 District Bottom Sheet */}
      <Modal transparent visible={districtModal} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <Text style={styles.modalTitle}>Select District</Text>

            <FlatList
              data={Object.keys(districtTalukData)}
              keyExtractor={item => item}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setDistrict(item);
                    setTaluk(null);
                    setDistrictModal(false);
                  }}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.sheetClose}
              onPress={() => setDistrictModal(false)}>
              <Text style={styles.sheetCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 🔥 Taluk Bottom Sheet */}
      <Modal transparent visible={talukModal} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <Text style={styles.modalTitle}>Select Taluk</Text>

            <FlatList
              data={district ? districtTalukData[district] : []}
              keyExtractor={item => item}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setTaluk(item);
                    setTalukModal(false);
                  }}>
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              style={styles.sheetClose}
              onPress={() => setTalukModal(false)}>
              <Text style={styles.sheetCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Register;
