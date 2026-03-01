import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
import {RootStackParamList} from '../../router/types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getTodayWeather} from './utils';
import Toast from 'react-native-toast-message';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const route = useRoute<any>();

  const {user} = route.params || {};
  const username = user?.name || 'Farmer';
  const token = global.authToken || '';

  const [menuVisible, setMenuVisible] = useState(false);
  const [weather, setWeather] = useState<any>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const fetchWeatherData = async () => {
    setLoadingWeather(true);

    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      setLoadingWeather(false);
      return;
    }

    Geolocation.getCurrentPosition(
      async pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        try {
          const data = await getTodayWeather({
            token,
            latitude,
            longitude,
          });
          setWeather(data);
        } catch (error: any) {
          Toast.show({
            type: 'error',
            text1: 'Weather Error',
            text2: error?.message || 'Unable to fetch weather',
          });
        } finally {
          setLoadingWeather(false);
        }
      },
      err => {
        setLoadingWeather(false);
        Toast.show({
          type: 'error',
          text1: 'Location Error',
          text2: err?.message || 'Location unavailable',
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const logout = async () => {
    try {
      await GoogleSignin.signOut();
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Logout Error',
        text2: error?.message || 'Logout failed',
      });
    }
  };

  const goToProfile = () => {
    setMenuVisible(false);
    navigation.navigate('Profile', {user});
  };

  const goToMyCrops = () => {
    setMenuVisible(false);
    navigation.navigate('MyCrops');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userName}>{username}</Text>
        </View>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setMenuVisible(true)}>
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* ===== HERO CARD ===== */}
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Agro Shield 🌾</Text>
        <Text style={styles.heroSubtitle}>
          Smart Crop Registration & Insurance Protection for Farmers
        </Text>
      </View>

      {/* ===== SERVICES GRID ===== */}
       <Text style={styles.sectionTitle}>Services</Text>

      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.gridCard}
          onPress={() => navigation.navigate('CropRegister', {user})}>
          <Text style={styles.gridIcon}>🌱</Text>
          <Text style={styles.gridText}>Register Crop</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridCard}
          onPress={() => navigation.navigate('MyClaims')}>
          <Text style={styles.gridIcon}>📄</Text>
          <Text style={styles.gridText}>My Claims</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridCard}
          onPress={() => navigation.navigate('SchemeDetails')}>
          <Text style={styles.gridIcon}>📘</Text>
          <Text style={styles.gridText}>About Scheme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridCard}
          onPress={() => navigation.navigate('PremiumCalculator')}>
          <Text style={styles.gridIcon}>💰</Text>
          <Text style={styles.gridText}>Premium Calculator</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.gridCardFull}
          onPress={() => navigation.navigate('MoreServices')}>
          <Text style={styles.gridIcon}>🔎</Text>
          <Text style={styles.gridText}>More Services</Text>
        </TouchableOpacity> */}
      </View>

      {/* ===== WEATHER CARD ===== */}

      <View style={styles.weatherCard}>
        <View style={styles.weatherHeader}>
          <Text style={styles.weatherTitle}>Today's Weather</Text>

          <TouchableOpacity
            style={styles.refreshButton}
            onPress={fetchWeatherData}
            activeOpacity={0.7}>
            {loadingWeather ? (
              <ActivityIndicator size="small" color="#15803D" />
            ) : (
              <Icon name="refresh" size={20} color="#15803D" />
            )}
          </TouchableOpacity>
        </View>

        {weather ? (
          <>
            <Text style={styles.weatherRow}>
              🌧 Rainfall: {weather.rainfall_mm} mm
            </Text>

            <Text style={styles.weatherRow}>
              🌤 Condition: {weather.condition}
            </Text>

            <View
              style={[
                styles.alertBadge,
                weather.alert === 'Heavy Rain Alert' ||
                weather.alert === 'Heat Wave Alert'
                  ? styles.alertRed
                  : weather.alert === 'Moderate Rain Expected'
                  ? styles.alertYellow
                  : styles.alertGreen,
              ]}>
              <Text style={styles.alertText}>
                {weather.alert ? weather.alert : 'No Weather Risk'}
              </Text>
            </View>
          </>
        ) : (
          !loadingWeather && (
            <Text style={styles.weatherRow}>Weather unavailable</Text>
          )
        )}
      </View>

      {/* ===== MENU MODAL ===== */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setMenuVisible(false)}>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={goToProfile}>
              <Text style={styles.menuText}>👤 Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={goToMyCrops}>
              <Text style={styles.menuText}>🌾 My Crops</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={logout}>
              <Text style={[styles.menuText, {color: 'red'}]}>🚪 Logout</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </ScrollView>
  );
};

export default Home;
