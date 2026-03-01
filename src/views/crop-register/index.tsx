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
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';
import {createCrop} from './utils';
import Toast from 'react-native-toast-message';

type CropNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'CropRegister'
>;

type LocationType = {
  latitude: number;
  longitude: number;
};

type ImageType = {
  uri: string;
};

const SEASONS = ["Kharif", "Rabi", "Zaid", "Samba", "Kuruvai", "Navarai"];
const CROPS = ["Paddy", "Wheat", "Sugarcane", "Maize", "Cotton", "Groundnut"];

const CropRegistration = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [cropType, setCropType] = useState('');
  const [season, setSeason] = useState('');
  const [landArea, setLandArea] = useState('');
  const [sowingDate, setSowingDate] = useState('');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [cropModal, setCropModal] = useState(false);
  const [seasonModal, setSeasonModal] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const navigation = useNavigation<CropNavProp>();
  const route = useRoute<any>();
  const token = global.authToken || '';

  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.find(d => d.position === 'back');
  const [showCamera, setShowCamera] = useState(false);

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
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 0},
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
        text1: 'Camera Permission Required',
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
  const submitCrop = async () => {
    if (!location) {
      Toast.show({type: 'error', text1: 'Location not available'});
      return;
    }

    if (!cropType || !season || !landArea || !sowingDate) {
      Toast.show({type: 'error', text1: 'All fields are required'});
      return;
    }

    if (images.length === 0) {
      Toast.show({type: 'error', text1: 'Add at least one baseline image'});
      return;
    }

    try {
      setSubmitting(true);

      await createCrop({
        token,
        cropType,
        season,
        landAreaHectare: parseFloat(landArea),
        sowingDate,
        latitude: location.latitude,
        longitude: location.longitude,
        images,
      });

      Toast.show({
        type: 'success',
        text1: 'Crop Registered Successfully',
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
        <Text style={styles.title}>Register Crop</Text>

        <Text style={styles.locationText}>
          {loadingLocation
            ? 'Fetching location...'
            : location
            ? `📍 ${location.latitude.toFixed(5)}, ${location.longitude.toFixed(5)}`
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
          <Text style={styles.addPhotoText}>Add Baseline Photo</Text>
        </TouchableOpacity>

        {/* Crop Type Modal Trigger */}
        <TouchableOpacity
          style={styles.selector}
          onPress={() => setCropModal(true)}>
          <Text style={cropType ? styles.selectedText : styles.placeholderText}>
            {cropType || 'Select Crop Type'}
          </Text>
        </TouchableOpacity>

        {/* Season Modal Trigger */}
        <TouchableOpacity
          style={styles.selector}
          onPress={() => setSeasonModal(true)}>
          <Text style={season ? styles.selectedText : styles.placeholderText}>
            {season || 'Select Season'}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Land Area (Hectare)"
          placeholderTextColor="#475569"
          keyboardType="numeric"
          value={landArea}
          onChangeText={setLandArea}
        />

        {/* Date Picker */}
        <TouchableOpacity
          style={styles.selector}
          onPress={() => setShowDate(true)}>
          <Text style={sowingDate ? styles.selectedText : styles.placeholderText}>
            {sowingDate || 'Select Sowing Date'}
          </Text>
        </TouchableOpacity>

        {showDate && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDate(false);
              if (selectedDate) {
                const formatted = selectedDate.toISOString().split('T')[0];
                setSowingDate(formatted);
              }
            }}
          />
        )}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitCrop}
          disabled={submitting}>
          {submitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitText}>Register Crop</Text>
          )}
        </TouchableOpacity>
      </ScrollView>

      {/* Crop Modal */}
      <Modal transparent visible={cropModal} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            {CROPS.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.modalItem}
                onPress={() => {
                  setCropType(item);
                  setCropModal(false);
                }}>
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.sheetClose}
              onPress={() => setCropModal(false)}>
              <Text style={styles.sheetCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Season Modal */}
      <Modal transparent visible={seasonModal} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            {SEASONS.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.modalItem}
                onPress={() => {
                  setSeason(item);
                  setSeasonModal(false);
                }}>
                <Text style={styles.modalItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.sheetClose}
              onPress={() => setSeasonModal(false)}>
              <Text style={styles.sheetCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CropRegistration;