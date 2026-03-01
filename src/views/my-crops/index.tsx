/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router/types';
import {getMyCrops} from './utils';
import styles from './style';
import Toast from 'react-native-toast-message';

type MyCropsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyCrops'
>;

const MyCrops = () => {
  const navigation = useNavigation<MyCropsNavigationProp>();
  const token = global.authToken || '';

  const [crops, setCrops] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const data = await getMyCrops(token);
        setCrops(data);
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error?.message || 'Failed to fetch crops',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => navigation.navigate('CropDetails', {cropId: item._id})}>
      
      <View style={styles.cardHeader}>
        <Text style={styles.cropType}>{item.cropType}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.season}</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.meta}>
          🌾 Land Area: {item.landAreaHectare} ha
        </Text>

        <Text style={styles.date}>
          📅 Sown: {new Date(item.sowingDate).toLocaleDateString()}
        </Text>
      </View>

      <Text style={styles.viewMore}>View Details →</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Crops</Text>

      {crops.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No crops registered yet 🌱</Text>
        </View>
      ) : (
        <FlatList
          data={crops}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyCrops;