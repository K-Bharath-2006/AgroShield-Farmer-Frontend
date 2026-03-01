/* eslint-disable prettier/prettier */

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import ImageResizer from 'react-native-image-resizer';
import styles from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';
import {raiseClaim} from './utils';
import Toast from 'react-native-toast-message';
import DateTimePicker from '@react-native-community/datetimepicker';

type ClaimNavProp = NativeStackNavigationProp<RootStackParamList, 'RaiseClaim'>;

type LocationType = {
  latitude: number;
  longitude: number;
};

type ImageType = {
  uri: string;
};

const DAMAGE_GROUPS = [
  {
    title: 'Natural Fire & Lightning',
    items: ['Natural Fire', 'Lightning'],
  },
  {
    title: 'Storm / Cyclone Related',
    items: [
      'Storm',
      'Hailstorm',
      'Cyclone',
      'Typhoon',
      'Tempest',
      'Hurricane',
      'Tornado',
    ],
  },
  {
    title: 'Water Related',
    items: ['Flood', 'Inundation', 'Landslide'],
  },
  {
    title: 'Climate Related',
    items: ['Drought', 'Dry spells'],
  },
  {
    title: 'Biological',
    items: ['Pests', 'Diseases'],
  },
];

const RaiseClaim = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [description, setDescription] = useState('');
  const [damageType, setDamageType] = useState('');
  const [damageDate, setDamageDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [damageModal, setDamageModal] = useState(false);

  const navigation = useNavigation<ClaimNavProp>();
  const route = useRoute<any>();
  const {cropId} = route.params;

  const token = global.authToken || '';

  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.find(d => d.position === 'back');
  const [showCamera, setShowCamera] = useState(false);

  const onChangeDate = (event: any, date?: Date) => {
    setShowDatePicker(false);

    if (date) {
      setSelectedDate(date);
      const formatted = date.toISOString().split('T')[0]; // YYYY-MM-DD
      setDamageDate(formatted);
    }
  };
  /* ---------- LOCATION ---------- */
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        setLoadingLocation(false);
        return;
      }

      Geolocation.getCurrentPosition(
        pos => {
          setLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLoadingLocation(false);
        },
        err => {
          setLoadingLocation(false);
          Toast.show({
            type: 'error',
            text1: 'Location Error',
            text2: err.message,
          });
        },
        {enableHighAccuracy: true, timeout: 150000, maximumAge: 0},
      );
    };

    fetchLocation();
  }, []);

  /* ---------- CAMERA ---------- */
  const openCamera = async () => {
    const permission = await Camera.requestCameraPermission();
    if (permission !== 'granted') {
      Toast.show({
        type: 'error',
        text1: 'Camera permission required',
      });
      return;
    }
    setShowCamera(true);
  };

  const takePhoto = async () => {
    try {
      const photo = await cameraRef.current?.takePhoto();

      if (photo?.path) {
        const resizedImage = await ImageResizer.createResizedImage(
          'file://' + photo.path,
          1024,
          1024,
          'JPEG',
          70,
        );

        const newImage = {uri: resizedImage.uri};
        setImages(prev => [...prev, newImage]);
        setShowCamera(false);
      }
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Camera Error',
      });
    }
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  /* ---------- SUBMIT ---------- */
  const submitClaim = async () => {
    if (!location) {
      Toast.show({type: 'error', text1: 'Location not available'});
      return;
    }

    if (!description || !damageType || !damageDate) {
      Toast.show({type: 'error', text1: 'All fields are required'});
      return;
    }

    if (images.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Please add at least one damage image',
      });
      return;
    }

    try {
      setSubmitting(true);

      await raiseClaim({
        token,
        cropId,
        description,
        damageType,
        damageDate,
        latitude: location.latitude,
        longitude: location.longitude,
        images,
      });

      Toast.show({
        type: 'success',
        text1: 'Claim submitted successfully',
      });

      navigation.goBack();
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------- CAMERA VIEW ---------- */
  if (showCamera && device) {
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <Camera
          ref={cameraRef}
          style={{flex: 1}}
          device={device}
          isActive={true}
          photo
        />

        <TouchableOpacity
          onPress={takePhoto}
          style={{
            position: 'absolute',
            bottom: 40,
            alignSelf: 'center',
            backgroundColor: '#fff',
            padding: 18,
            borderRadius: 50,
          }}>
          <Text>Capture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowCamera(false)}
          style={{position: 'absolute', top: 40, left: 20}}>
          <Text style={{color: '#fff'}}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Raise Claim</Text>

        <Text style={styles.locationText}>
          {loadingLocation
            ? 'Fetching location...'
            : location
            ? `📍 ${location.latitude.toFixed(5)}, ${location.longitude.toFixed(
                5,
              )}`
            : 'Location unavailable'}
        </Text>

        <View style={styles.imageGrid}>
          {images.map((img, index) => (
            <View key={index}>
              <Image source={{uri: img.uri}} style={styles.imagePreview} />
              <TouchableOpacity
                onPress={() => removeImage(index)}
                style={{
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  backgroundColor: 'red',
                  borderRadius: 10,
                  paddingHorizontal: 6,
                }}>
                <Text style={{color: '#fff', fontSize: 12}}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.addPhotoButton} onPress={openCamera}>
          <Text style={styles.addPhotoText}>Add Damage Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalItem}
          onPress={() => setDamageModal(true)}>
          <Text style={{color: damageType ? '#111827' : '#475569'}}>
            {damageType || 'Select Damage Type'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}>
          <Text style={{color: damageDate ? '#111827' : '#475569'}}>
            {damageDate || 'Select Damage Date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDate || new Date()}
            mode="date"
            display="default"
            maximumDate={new Date()} // cannot select future
            onChange={onChangeDate}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Describe the damage"
          placeholderTextColor="#475569"
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitClaim}
          disabled={submitting}>
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitText}>Submit Claim</Text>
          )}
        </TouchableOpacity>
      </ScrollView>

      <Modal transparent visible={damageModal} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <ScrollView>
              {DAMAGE_GROUPS.map(group => (
                <View key={group.title}>
                  <Text style={styles.groupTitle}>{group.title}</Text>
                  {group.items.map(item => (
                    <TouchableOpacity
                      key={item}
                      style={[
                        styles.modalItem,
                        damageType === item && styles.modalItemSelected,
                      ]}
                      onPress={() => {
                        setDamageType(item);
                        setDamageModal(false);
                      }}>
                      <Text
                        style={[
                          styles.modalItemText,
                          damageType === item && styles.modalItemTextSelected,
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity
              style={styles.sheetClose}
              onPress={() => setDamageModal(false)}>
              <Text style={styles.sheetCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default RaiseClaim;
