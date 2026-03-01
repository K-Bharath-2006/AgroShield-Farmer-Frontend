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
import {getMyClaims} from './utils';
import styles from './style';
import Toast from 'react-native-toast-message';

type MyClaimsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyClaims'
>;

const MyClaims = () => {
  const navigation = useNavigation<MyClaimsNavigationProp>();
  const token = global.authToken || '';

  const [claims, setClaims] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const data = await getMyClaims(token);
        setClaims(data);
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error?.message || 'Failed to fetch claims',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() =>
        navigation.navigate('ClaimDetails', {claimId: item._id})
      }>
      <View style={styles.cardHeader}>
        <Text style={styles.claimNumber}>
          #{item.claimNumber}
        </Text>

        <View
          style={[
            styles.badge,
            item.status === 'Approved'
              ? styles.greenBadge
              : item.status === 'Rejected'
              ? styles.redBadge
              : styles.yellowBadge,
          ]}>
          <Text style={styles.badgeText}>
            {item.status}
          </Text>
        </View>
      </View>

      <Text style={styles.meta}>
        🌾 {item.crop?.cropType || 'N/A'}
      </Text>

      <Text style={styles.meta}>
        ⚠ {item.damageType}
      </Text>

      <Text style={styles.meta}>
        🔄 Stage: {item.stage}
      </Text>

      <Text style={styles.meta}>
        📊 Risk: {item.riskScore || 0}
      </Text>

      <Text style={styles.date}>
        📅 {new Date(item.createdAt).toLocaleDateString()}
      </Text>

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
      <Text style={styles.header}>My Claims</Text>

      {claims.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            No claims submitted yet 📄
          </Text>
        </View>
      ) : (
        <FlatList
          data={claims}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default MyClaims;